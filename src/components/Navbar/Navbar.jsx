import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
}
    from "../ui/sheet";
import NavLinks from "./NavLinks";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { RiLoginBoxLine } from "react-icons/ri";



const Navbar = () => {

    return (
        <nav className={`flex justify-between py-2 px-4 max-w-7xl mx-auto items-center rounded-b-xl`}>
            {/* nav start */}
            <Link to={'/'} className="order-2 lg:order-1">
                <h1 className={`text-xl sm:text-3xl font-medium italic`}>Job Box</h1>
            </Link>
            {/* nav center */}
            {/* large device */}
            <div className="hidden lg:order-2 lg:flex">
                <NavLinks isSmallDevie={false}></NavLinks>
            </div>
            {/* small device */}
            <div className="order-1 lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline"><Menu /></Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="">
                        <SheetHeader>
                            <SheetTitle className="text-2xl font-bold">
                                Job Box
                            </SheetTitle>
                            <SheetDescription className="sr-only">
                                Conquer New Heights.
                            </SheetDescription>
                            <NavLinks isSmallDevie={true}></NavLinks>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            {/* nav end */}
            <div className="order-3 gap-1 sm:gap-3 flex">
                <Link to='/login'>
                    <Button variant="outline" className="font-bold">Log In <RiLoginBoxLine /></Button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;