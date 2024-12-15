import MainLayout from "@/layout/MainLayout";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import Home from "@/pages/Home/Home";
import JobDetails from "@/pages/JobDetails/JobDetails";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router";
import PrivateRoute from "./PrivateRoute";
import JobApply from "@/pages/JobApply/JobApply";
import MyApplications from "@/pages/MyApplications/MyApplications";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute><JobApply /></PrivateRoute>,
            },
            {
                path: '/my-applications',
                element: <PrivateRoute><MyApplications /></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    }
])

export default Routes;