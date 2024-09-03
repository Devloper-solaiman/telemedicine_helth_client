import { jwtDecode } from "jwt-decode";

export const decodedToken = (Token: string) => {
    return jwtDecode(Token)
};

