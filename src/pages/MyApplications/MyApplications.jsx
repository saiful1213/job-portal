import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { FidgetSpinner } from "react-loader-spinner";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import toast from "react-hot-toast";


const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    const [emptyJob, setEmptyJob] = useState(false);
    const [loading, setLoading] = useState(true);
    const [dialog, setDialog] = useState(false);
    const [jobId, setJobId] = useState();

    useEffect(() => {
        const loadingJob = async () => {
            try {
                setLoading(true)
                const response = await fetch(`http://localhost:5000/job-applications?email=${user.email}`);
                const data = await response.json();

                if (!data || data.length === 0) {
                    setEmptyJob(true);
                    setJobs([]);
                }
                else {
                    setEmptyJob(false);
                    setJobs(data);
                }
            }
            catch (err) {
                console.log(err)
            }
            finally {
                setLoading(false);
            }
        }
        if (user?.email) {
            loadingJob();
        }
    }, [user.email])

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="fidget-spinner-loading"
                wrapperStyle={{}}
                wrapperClass="fidget-spinner-wrapper"
            />
        </div>
    }

    const handleDeleteJob = id => {
        fetch(`http://localhost:5000/job-applications/${id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('job deleted succssfully!');
                    const remainingJobs = jobs?.filter(job => job._id !== id);
                    setJobs(remainingJobs);
                }
            })
    }

    return (
        <div className="my-12">
            <h1 className='text-2xl font-bold mb-6 text-center'>My Applications</h1>
            {
                emptyJob ? <h1 className="text-2xl font-semibold text-red-600 text-center">You did not apply any job yet</h1> :
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">SL.</TableHead>
                                <TableHead>Company Logo</TableHead>
                                <TableHead>Company Name</TableHead>
                                <TableHead>Job Title</TableHead>
                                <TableHead>Company Location</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                jobs?.map((job, index) => {
                                    const { _id, title, location, company, company_logo } = job;
                                    return (
                                        <TableRow key={_id}>
                                            <TableCell className="font-medium">{index + 1}</TableCell>
                                            <TableCell><img src={company_logo} className="w-10" /></TableCell>
                                            <TableCell>{company}</TableCell>
                                            <TableCell>{title}</TableCell>
                                            <TableCell>{location}</TableCell>
                                            <TableCell>
                                                <Button variant="destructive"
                                                    onClick={() => {
                                                        setDialog(true);
                                                        setJobId(_id)
                                                    }}>
                                                    <Trash2 />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                            <AlertDialog open={dialog} onOpenChange={(dialog) => setDialog(dialog)}>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your application
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel onClick={() => setDialog(false)}>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => handleDeleteJob(jobId)} className="bg-red-600">
                                            Continue
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </TableBody>
                    </Table>
            }
        </div>
    )
}

export default MyApplications;