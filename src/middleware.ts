/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { jwtDecode } from "jwt-decode";
import { NextResponse, NextRequest } from "next/server";

type TokenType = {
    name: string;
    id: string;
    role: string;
    email: string;
    iat: number;
    exp: number;
};

export const middleware = async (request: NextRequest) => {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get("accessToken")?.value || '';

    if (!token) {
        console.log("No token found");
        const response = NextResponse.redirect(new URL('/login', request.url));
        response.cookies.set("accessToken", "", { expires: new Date(0) });
        return response;
    }

    let decodedToken: TokenType;
    try {
        decodedToken = jwtDecode<TokenType>(token);
        if (!decodedToken) throw new Error("Invalid token structure");
    } catch (error) {
        console.log("Invalid token:", token);
        const response = NextResponse.redirect(new URL('/login', request.url));
        response.cookies.set("accessToken", "", { expires: new Date(0) });
        return response;
    }

    // Restrict unauthorized access to the dashboard
    if (path.startsWith('/dashboard') && !decodedToken.id) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/dashboard/:path*'],
};
