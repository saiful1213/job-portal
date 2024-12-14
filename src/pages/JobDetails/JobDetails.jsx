import { Button } from "@/components/ui/button";
import { useLoaderData } from "react-router";

const JobDetails = () => {
    const job = useLoaderData();
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        requirements,
        description,
        company,
        company_logo,
    } = job;

    return (
        <div className="my-12 space-y-1">
            <h1 className='text-2xl font-bold'>Job detail for {title}</h1>
            <p>apply for: {company}</p>
            <p>deadline: {applicationDeadline}</p>
            <Button className="bg-blue-600">Apply Now</Button>
        </div>
    )
}

export default JobDetails;