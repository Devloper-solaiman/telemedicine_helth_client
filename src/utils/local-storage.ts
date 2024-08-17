
export const SetLocalStorage = (key:string, token:string) => {
    if (!key || typeof window === "undefined") {
        return "";
    }
    return localStorage.setItem(key, token)
};

 