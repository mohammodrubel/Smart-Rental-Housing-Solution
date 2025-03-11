
"use client";
import { createLandlord } from "@/app/api/landlords";
import { useUser } from "@/context/userContext";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

type RentalFormData = {
  rental_house_location: string;
  details_description: string;
  rent_amount: number;
  number_of_bedrooms: number;
  landlord: string;
  images: FileList;
  amenities: string;
};
export type LandData = {
  _id: string;
  amenities: string;
  createdAt: string;
  details_description: string;
  landlord: string;
  multiple_images: string[];
  number_of_bedrooms: number;
  rent_amount: number;
  rental_house_location: string;
  updatedAt: string;
  __v: number;
  message: string;
  statusCode: number;
  success: boolean;
};

export default function RentalForm() {
  const user = useUser()

  const { register, handleSubmit, formState: { errors } } = useForm<RentalFormData>();
  const [files, setFiles] = useState<File[]>([]);


  const onSubmit = async (data: RentalFormData) => {
    try {
      if (files.length > 3) {
        alert("You can upload a maximum of 3 images.");
        return;
      }

      const info: Partial<LandData> = {
        rental_house_location: data.rental_house_location,
        details_description: data.details_description,
        rent_amount: data.rent_amount,
        number_of_bedrooms: data.number_of_bedrooms,
        landlord: user?.user?.id,
        amenities: data.amenities,
      };

      console.log(info);

      const formData = new FormData();
      formData.append("data", JSON.stringify(info));

      // Append each image separately
      files.forEach((file) => {
        formData.append("file", file);
      });

      const res = await createLandlord(formData);
      if(res?.success){
        toast.success(res?.message)
      }
      
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
        {/* Image Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {files.map((file, index) => (
            <Image key={index} src={URL.createObjectURL(file)} alt="Uploaded" width={100} height={100} className="rounded-lg object-cover w-[100px] h-[100px]" />
          ))}
        </div>

        {/* File Input */}
        <input
          className="border border-gray-300 p-2 rounded w-full"
          type="file"
          multiple
          accept="image/*"
          {...register("images", { required: true })}
          onChange={(event) => {
            const selectedFiles = event.target.files;
            if (selectedFiles) {
              setFiles(Array.from(selectedFiles));
            }
          }}
        />
        {errors.images && <p className="text-red-500 text-sm">Images are required</p>}

        {/* Location */}
        <input className="border border-gray-300 p-2 rounded w-full" placeholder="Location" {...register("rental_house_location", { required: true })} />
        {errors.rental_house_location && <p className="text-red-500 text-sm">Location is required</p>}

        {/* Description */}
        <textarea className="border border-gray-300 p-2 rounded w-full resize-none" placeholder="Description" {...register("details_description", { required: true })}></textarea>
        {errors.details_description && <p className="text-red-500 text-sm">Description is required</p>}

        {/* Amenities */}
        <textarea className="border border-gray-300 p-2 rounded w-full resize-none" placeholder="Amenities" {...register("amenities", { required: true })}></textarea>
        {errors.amenities && <p className="text-red-500 text-sm">Amenities are required</p>}

        {/* Rent Amount */}
        <input className="border border-gray-300 p-2 rounded w-full" type="number" placeholder="Rent Amount" {...register("rent_amount", { required: true, valueAsNumber: true })} />
        {errors.rent_amount && <p className="text-red-500 text-sm">Rent amount is required</p>}

        {/* Number of Bedrooms */}
        <input className="border border-gray-300 p-2 rounded w-full" type="number" placeholder="Bedrooms" {...register("number_of_bedrooms", { required: true, valueAsNumber: true })} />
        {errors.number_of_bedrooms && <p className="text-red-500 text-sm">Number of bedrooms is required</p>}


        {/* Submit Button */}
        <button type="submit" className="w-full bg-[#07588a] text-white py-2 rounded hover:bg-[#d6065a] transition">
          Submit
        </button>
      </form>
      <Toaster position="top-center" />
    </div>
  );
}
