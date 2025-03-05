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