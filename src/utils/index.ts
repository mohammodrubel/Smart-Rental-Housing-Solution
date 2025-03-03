"use server"
import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"

export const getCurrentValue = async () => {
    const accessToken = (await cookies()).get("accessToken")?.value
    let decodedData = null
        if (accessToken) {
            decodedData = await jwtDecode(accessToken)
            return decodedData
        } else {
            return null
        }
}