import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeClosed } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useLocation, useNavigate } from "react-router";
import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json"
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import AuthContext from "@/context/AuthContext/AuthContext";
import SocialLogin from "@/components/SocialLogin/SocialLogin";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState();
    const { handleCreateUser, handleProfileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const terms = form.terms[1].checked;

        if (!terms) {
            return toast.error('Accept our terms and conditions')
        }

        setError('');

        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regex.test(password)) {
            return setError('Password must be at least 6 charecters, one uppercase and one lowercase');
        }

        handleCreateUser(email, password)
            .then((result) => {
                console.log(result.user);
                handleProfileUpdate({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        toast.success('user created successfully');
                        navigate(state ? state : '/')
                    })
                    .catch(err => toast.error(err.message))
            })
            .catch(err => {
                toast.error(err.message);
            })
    }


    return (
        <div className="mx-auto max-w-4xl flex flex-col md:flex-row-reverse gap-12 *:md:w-1/2 items-center">
            <div className="max-w-md mx-auto">
                <Card className="mb-24 mt-12">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Create an account</CardTitle>
                        <CardDescription>Enter your email below to create your account</CardDescription>
                    </CardHeader>
                    <CardContent>

                        <SocialLogin />

                        <form onSubmit={handleRegister}>
                            <div className="mb-2">
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" name="name" required placeholder="your name" />
                            </div>

                            <div className="mb-2">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email" required placeholder="email@example.com" />
                            </div>

                            <div className="mb-2">
                                <Label htmlFor="photo">Photo-URL</Label>
                                <Input type="text" id="photo" name="photo" required placeholder="your photo url" />
                            </div>

                            <div className="relative">
                                <Label htmlFor="password">Password</Label>
                                <Input type={!showPassword ? 'password' : 'text'}
                                    id="password"
                                    name="password"
                                    required placeholder="......"
                                    className="placeholder:text-xl placeholder:font-bold" />
                                <div
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-1 top-[27px] border p-1 cursor-pointer">
                                    {!showPassword ? <Eye size={'20px'} /> : <EyeClosed size={'20px'} />}
                                </div>
                            </div>


                            <div className="flex items-center space-x-2 mt-4">
                                <Checkbox id="terms" name="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Accept terms and conditions
                                </label>
                            </div>

                            {
                                error && <p className="text-red-500 text-sm font-medium mt-3">{error}</p>
                            }

                            <Button type="submit" className="w-full mt-6">Register</Button>
                        </form>

                        <div className="mt-4 text-center text-sm">
                            Already have an account?
                            <Link to="/login">
                                <Button variant="link" className="underline">Sign in</Button>
                            </Link>
                        </div>

                    </CardContent>
                </Card>
            </div>
            <div>
                <Lottie animationData={registerLottie} loop={true} />
            </div>
        </div>
    )
}

export default Register;
