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
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router";
import { EyeClosed } from "lucide-react";


const Login = () => {
    // const { handleLogInUser, handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);
    // const [showPassword, setShowPassword] = useState(false);
    // const navigate = useNavigate();
    // const { state } = useLocation();

    // const handleLogin = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     handleLogInUser(email, password)
    //         .then(() => {
    //             toast.success('login success');
    //             navigate(state ? state : '/')
    //         })
    //         .catch(err => {
    //             toast.error(err.message)
    //         })
    // }

    // const handleGoogle = () => {
    //     handleGoogleSignIn()
    //         .then(() => {
    //             toast.success('login success');
    //             navigate(state ? state : '/');
    //         })
    //         .catch(err => {
    //             toast.error(err.message);
    //         })
    // }

    // const handleGithub = () => {
    //     handleGithubSignIn()
    //         .then(() => {
    //             toast.success('login success');
    //             navigate(state ? state : '/');
    //         })
    //         .catch(err => {
    //             toast.error(err.message);
    //         })
    // }

    return (
        <div className="mx-auto max-w-7xl">
            <Card className="mx-auto max-w-md my-12">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">Login</CardTitle>
                    <CardDescription>Enter your email below to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center gap-3 ">
                        <Button size="lg" variant="outline"> <FaGoogle />Google</Button>
                        <Button size="lg" variant="outline"> <FaGithub />Github</Button>
                    </div>
                    <div className="flex my-5 items-center gap-2">
                        <Separator className="flex-1"></Separator>
                        <p className="text-muted-foreground text-sm">Or continue with</p>
                        <Separator className="flex-1"></Separator>
                    </div>

                    <form>
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
                                    type='password'
                                    name="password"
                                    placeholder="......"
                                    required
                                    className="placeholder:text-xl placeholder:font-bold" />
                                <div

                                    className="absolute right-1 top-8 border p-1 cursor-pointer">
                                    <EyeClosed size={'20px'} />
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
        </div>
    )
}

export default Login;