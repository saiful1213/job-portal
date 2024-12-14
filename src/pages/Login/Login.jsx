import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link, useLocation, useNavigate } from "react-router";
import { Eye, EyeClosed } from "lucide-react";
import Lottie from "lottie-react";
import logLottie from "../../assets/lottie/login.json"
import { useContext, useState } from "react";
import AuthContext from "@/context/AuthContext/AuthContext";
import toast from "react-hot-toast";
import SocialLogin from "@/components/SocialLogin/SocialLogin";


const Login = () => {
    const { handleLogInUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        handleLogInUser(email, password)
            .then((result) => {
                console.log(result?.user)
                toast.success('login success');
                navigate(state ? state : '/')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }


    return (
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row gap-12 *:md:w-1/2 items-center">
            <Card className="mx-auto max-w-md my-12">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">Login</CardTitle>
                    <CardDescription>Enter your email below to login to your account</CardDescription>
                </CardHeader>
                <CardContent>

                    <SocialLogin />

                    <form onSubmit={handleLogin}>
                        <div className="grid gap-4">

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>

                            <div className="grid gap-2 relative">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <span className="ml-auto inline-block text-sm underline cursor-pointer">
                                        <span>Forgot your password?</span>
                                    </span>
                                </div>
                                <Input
                                    id="password"
                                    type={!showPassword ? 'password' : 'text'}
                                    name="password"
                                    placeholder="......"
                                    required
                                    className="placeholder:text-xl placeholder:font-bold" />
                                <div
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-1 top-8 border p-1 cursor-pointer">
                                    {!showPassword ? <Eye size={'20px'} /> : <EyeClosed size={'20px'} />}
                                </div>
                            </div>

                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                        </div>
                    </form>

                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link to="/register">
                            <Button variant="link" className="underline">Sign up</Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
            <div>
                <Lottie animationData={logLottie} loop={true} className="w-1/2 mx-auto" />
            </div>
        </div>
    )
}

export default Login;