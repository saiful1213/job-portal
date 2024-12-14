import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext/AuthContext";

const SocialLogin = () => {
    const { handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const { state } = useLocation();

    const handleGoogle = () => {
        handleGoogleSignIn()
            .then(() => {
                toast.success('successfully login');
                navigate(state ? state : '/');
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    const handleGithub = () => {
        handleGithubSignIn()
            .then(() => {
                toast.success('successfully login');
                navigate(state ? state : '/');
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    return (
        <div>
            <div className="flex justify-center gap-3 ">
                <Button size="lg" variant="outline" onClick={handleGoogle}> <FaGoogle />Google</Button>
                <Button size="lg" variant="outline" onClick={handleGithub}> <FaGithub />Github</Button>
            </div>
            <div className="flex my-5 items-center gap-2">
                <Separator className="flex-1"></Separator>
                <p className="text-muted-foreground text-sm">Or continue with</p>
                <Separator className="flex-1"></Separator>
            </div>
        </div>
    )
}

export default SocialLogin;