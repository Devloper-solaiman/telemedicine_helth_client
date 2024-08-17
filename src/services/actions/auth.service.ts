import { authKey } from "@/constants/authkey";
import { SetLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({accessToken}:{accessToken:string}) => {
    return SetLocalStorage(authKey, accessToken)
};

