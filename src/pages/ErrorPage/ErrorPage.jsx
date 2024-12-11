import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Page Not Found</h1>
            <Link to='/'>
                <Button>Go Home</Button>
            </Link>
        </div>
    )
}

export default ErrorPage;