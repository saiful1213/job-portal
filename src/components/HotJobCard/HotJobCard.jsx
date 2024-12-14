/* eslint-disable react/prop-types */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import { Link } from "react-router";

const HotJobCard = ({ job }) => {
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
        <div className="p-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            {/* Top Section with Company Logo and Highlight Icon */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <img
                        src={company_logo}
                        alt={`${company} logo`}
                        className="w-12 h-12 rounded-md object-cover"
                    />
                    <div>
                        <h3 className="text-lg font-semibold">{company}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
                    </div>
                </div>
            </div>

            {/* Job Details */}
            <div className="mt-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-3 text-gray-600 dark:text-gray-400 line-clamp-2">
                    {description}
                </p>
            </div>

            {/* Skills / Category */}
            <div className="flex flex-wrap gap-2 mt-4">
                {
                    requirements.map((skill, i) => <Badge key={i} variant="outline" className="text-sm">{skill}</Badge>)
                }
            </div>

            {/* Footer Section */}
            <div className="mt-4 flex items-center justify-between">
                <p className=" font-medium text-blue-500">Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                <Link to={`/jobs/${_id}`}>
                    <Button variant="" className="bg-blue-600">Apply</Button>
                </Link>
            </div>
        </div>
    );
};

export default HotJobCard;
