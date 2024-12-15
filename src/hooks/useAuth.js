import AuthContext from "@/context/AuthContext/AuthContext";
import { useContext } from "react";

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

export default useAuth;