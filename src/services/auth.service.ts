import { authKey } from "@/constants/authkey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, removeFromLocalStorage, SetToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({accessToken}:{accessToken:string}) => {
    return SetToLocalStorage(authKey, accessToken)
};


export const getUserInfo = () =>{
    const authToken = getFromLocalStorage(authKey)
    if (authToken) {
        const decodedData :any = decodedToken(authToken)
        return {
            ...decodedData,
            id: decodedData?.id,
            name: decodedData?.name,
            email: decodedData?.email,
            profilePhoto: decodedData?.profilePhoto,
            role: decodedData?.role?.toLowerCase(),
        }
        
    }
}   

export const isLoggedIn = ()=>{
    const authToken = getFromLocalStorage(authKey)
    console.log(authToken)
    if (authToken) {
        return !! authToken; 
    }
}

export const removeUser = ()=>{
    return removeFromLocalStorage(authKey)
}