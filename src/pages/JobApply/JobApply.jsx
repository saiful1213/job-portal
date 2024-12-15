import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

const JobApply = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(user)
        // console.table({ id, linkedIn, github, resume });

        const jobApplication = {
            job_id: id,
            applicant_email: user?.email,
            linkedIn,
            github,
            resume
        }

        fetch('http://localhost:5000/job-applications', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('job application successfull');
                    navigate('/my-applications');
                }
            })
    }

    return (
        <div className="my-12">
            <Card className="max-w-lg mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-6">Apply Job and Good Luck</h1>
                <form onSubmit={submitJobApplication}>
                    <div className="mb-2">
                        <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                        <Input type="url" id="linkedIn" name="linkedIn" required placeholder="your linkedin profile link" />
                    </div>

                    <div className="mb-2">
                        <Label htmlFor="github">Github Profile</Label>
                        <Input type="url" id="github" name="github" required placeholder="your github profile link" />
                    </div>

                    <div className="mb-2">
                        <Label htmlFor="resume">Resume-URL</Label>
                        <Input type="url" id="resume" name="resume" required placeholder="your resume link" />
                    </div>

                    <Button type="submit" className="mt-4">Apply Job</Button>
                </form>
            </Card>
        </div>
    )
}

export default JobApply;