import AuthContext from "@/context/AuthContext/AuthContext";
import { useContext } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="fidget-spinner-loading"
                wrapperStyle={{}}
                wrapperClass="fidget-spinner-wrapper"
            />
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname}></Navigate>
    }

    return children;
}

export default PrivateRoute;