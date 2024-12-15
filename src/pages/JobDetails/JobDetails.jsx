import { Button } from "@/components/ui/button";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
    const job = useLoaderData();
    const {
        _id,
        title,
        applicationDeadline,
        company,
    } = job;

    return (
        <div className="my-12 space-y-1">
            <h1 className='text-2xl font-bold'>Job detail for {title}</h1>
            <p>apply for: {company}</p>
            <p>deadline: {applicationDeadline}</p>
            <Link to={`/jobApply/${_id}`}>
                <Button className="bg-blue-600">Apply Now</Button>
            </Link>
        </div>
    )
}

export default JobDetails;