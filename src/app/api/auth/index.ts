"use server"

import { cookies } from "next/headers"
export const RegisterUser = async (userData: {name:string,email:string,password:string}) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/create-user`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(userData)
        })
        const result = await res.json()
        return result
    }
    catch (error) {
        return error
    }
}

export const LoginUser = async (loginData: { email: string; password: string }) => {
  try {
    if (!process.env.NEXT_PUBLIC_BASE_API) {
      throw new Error("API URL is undefined. Check .env.local file.");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify(loginData),
    });

    const result = await res.json();
    console.log(result?.data);

    if (result?.success) {
      (await cookies()).set("accessToken", result.data, {
        httpOnly: true,
        secure: true,
        path: "/", // Ensures the cookie is accessible throughout the site
        maxAge: 7 * 24 * 60 * 60, // Expires in 7 days (in seconds)
      });
    }

    return result;
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong." };
  }
};
export const logout = async () => {
    (await cookies()).delete("accessToken")
}


