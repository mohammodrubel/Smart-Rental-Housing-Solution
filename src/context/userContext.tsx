
import { IUser } from "@/types";
import { getCurrentValue } from "@/utils";

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"

export type IuserProviderValueTyps = {
    user: IUser | null | undefined,
    isLoading: boolean,
    setUser: (user: IUser | null) => void,
    setIsLoading: Dispatch<SetStateAction<boolean>>
};
const UserContext = createContext<IuserProviderValueTyps | undefined>(undefined)
function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<IUser | null>()
    const [isLoading, setIsLoading] = useState(true)

    const handleUser = async () => {
        const user = await getCurrentValue()
        setUser(user)
        setIsLoading(false)
    }

    useEffect(() => {
        handleUser()
    }, [isLoading])


    return (
        <UserContext.Provider value= {{ user, setUser, isLoading, setIsLoading }
}> { children } </UserContext.Provider>
  )
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (context == undefined) {
        throw new Error("useUser must be used within the UserProvider context");
    }
    return context
}

export default UserProvider