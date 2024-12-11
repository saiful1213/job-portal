import { RiFacebookFill } from "react-icons/ri";
import { Button } from "../ui/button";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto py-16">
            <div className="px-4 md:px-2 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-48 pt-8">
                <div>
                    <h3 className="text-lg font-medium mb-4 text-black">Job Box</h3>
                    <ul className=" list-inside cursor-pointer">
                        <p className="text-black/70 font-medium text-sm">
                            Job Box is a dynamic and user-friendly movie portal designed for cinema enthusiasts to explore, discover, and engage with a vast collection of movies.
                        </p>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-4 text-black">Contacts</h3>
                    <ul className=" list-inside cursor-pointer text-black/70">
                        <li className="hover:underline">Khagracharri, Bangladesh</li>
                        <li className="hover:underline">saifulislamptcbd@gamil.com</li>
                        <li className="hover:underline">+0123456789</li>
                    </ul>
                </div>
                <div>
                    <ul className="cursor-pointer">
                        <div className="*:w-full flex w-2/3">
                            <a target={'_blank'} href={`https://www.facebook.com/saifulislamptc1213`}>
                                <Button size="icon" variant="outline" className="rounded-l-md rounded-r-none w-full"><RiFacebookFill /></Button>
                            </a>
                            <a target={'_blank'} href={`https://www.x.com`}>
                                <Button size="icon" variant="outline" className="!rounded-none w-full"><FaTwitter /></Button>
                            </a>
                            <a target={'_blank'} href={`https://www.instgram.com`}>
                                <Button size="icon" variant="outline" className="!rounded-none w-full"><FaInstagram /></Button>
                            </a>
                            <a target={'_blank'} href={`https://www.youtube.com`}>
                                <Button size="icon" variant="outline" className="rounded-r-md rounded-l-none w-full"><FaYoutube /></Button>
                            </a>

                        </div>
                        <p className="text-black/70 mt-4">
                            Subscribe to our newsletter of follow us on the social channels to stay tuned.
                        </p>
                    </ul>
                </div>
            </div>

            <div className="text-center pt-8 border-t mt-8">
                <p className="mt-4 font-medium text-black/70">© 2022 - 2028 All rights reserved by CineHub. Developed By -
                    <a target={'_blank'} href={`https://www.facebook.com/saifulislamptc1213`}>
                        Saiful Islam.
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer;