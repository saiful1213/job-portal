/* eslint-disable react/prop-types */
import { NavLink } from "react-router";
import { IoHome } from "react-icons/io5";
import { MdContacts, MdLocalMovies, MdOutlineAddToPhotos } from "react-icons/md";
import { Star } from "lucide-react";

const NavLinks = ({ isSmallDevie }) => {

    const links = [
        { id: 1, name: 'Home', path: '/', icon: <IoHome /> },
        { id: 2, name: 'My Applications', path: '/my-applications', icon: <MdLocalMovies /> },
        { id: 3, name: 'Add Movie ', path: '/add-movie', icon: <MdOutlineAddToPhotos /> },
        { id: 4, name: 'My Favorites', path: '/my-favourites', icon: <Star /> },
        { id: 5, name: 'Contacts', path: '/contacts', icon: <MdContacts /> },
    ]

    return (
        <ul className={`flex ${isSmallDevie ? 'flex-col gap-4 mt-4 p-4 rounded-xl' : 'flex-row gap-10'} `}>
            {
                links.filter(link => !link.privateRoute)
                    .map(link => {
                        const { id, name, path, icon } = link;
                        return (
                            <li className={`${isSmallDevie && 'border-b rounded-md pb-2'}`} key={id}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        ` 
                                    ${isActive ? 'text-black' : 'text-black/70 hover:text-black'} 
                                    font-medium '}
                                    flex gap-2 items-center
                                    `
                                    }>
                                    {icon}
                                    {name}
                                </NavLink>
                            </li>
                        )
                    })
            }
        </ul>
    )
}


export default NavLinks;