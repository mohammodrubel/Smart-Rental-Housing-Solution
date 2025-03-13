"use server";

import { formDataType } from "@/components/Card";

export const createNewRequest = async (data: formDataType) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/tenants/requests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        return error;
    }
};
