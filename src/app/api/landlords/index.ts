/* eslint-disable @typescript-eslint/no-explicit-any */
import { LandData } from "@/app/(withDashbaord)/dashboard/landlords/manage-rental-house-posts/page";

export const createLandlord = async (data: FormData):Promise<LandData> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/landlords/requests`, {
            method: "POST",
            body: data,
        });

        if (!response.ok) {
            throw new Error("Failed to create landlord");
        }

        const info = await response.json();

        return info 
    } catch (error:any) {
        return error;
    }
};

export const getAllLandlord = async (args: { name: string; value: string | number | boolean }[]) => {
    const queryString = new URLSearchParams(
        args.reduce((acc: Record<string, string>, { name, value }) => {
            if (value) acc[name] = String(value);
            return acc;
        }, {})
    ).toString();
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings?${queryString}`, {
            cache: 'no-store',
        });

        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }

        return await response.json();
    } catch (error) {
        console.error("Error fetching landlords:", error);
        return { success: false, message: "Failed to fetch landlords" };
    }
};

export const getAllLandlordLocation = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching landlords:", error);
        return { success: false, message: "Failed to fetch landlords" };
    }
};

export const getSingleLandlordLocation = async (id:string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/${id}`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response)
        return await response.json();
    } catch (error) {
        console.error("Error fetching landlords:", error);
        return { success: false, message: "Failed to fetch landlords" };
    }
};
