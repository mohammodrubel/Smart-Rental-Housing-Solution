"use client";

import UserProvider from "@/context/userContext";
import { Toaster } from 'sonner';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <UserProvider>
            {children}
            <Toaster position="top-center" richColors />
        </UserProvider>
    );
};

export default Providers;