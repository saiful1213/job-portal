import HotJobCard from "@/components/HotJobCard/HotJobCard";
import { useState } from "react";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useState(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-bold text-center text-black/90'>Jobs of the day</h1>
            <p className="text-center text-black/80 mt-4 font-medium">Search and connect with the right candidates faster.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 my-12">
                {
                    jobs?.map(job => <HotJobCard key={job._id} job={job} />)
                }
            </div>
        </div>
    )
}

export default HotJobs;