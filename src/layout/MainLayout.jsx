import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <>
            <div className="">
                <Navbar />
            </div>
            <div className="max-w-7xl mx-auto">
                <Outlet />
            </div>
            <div className="">
                <Footer />
            </div>
        </>
    )
}

export default MainLayout;