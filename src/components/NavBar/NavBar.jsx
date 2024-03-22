// import PropTypes from 'prop-types';
import { MdMenuOpen, MdClose } from "react-icons/md";
import Link from "../Link/Link";
import { useState } from "react";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
    ];

    return (
        <nav className="p-4 bg-sky-100 flex md:justify-center">
            <div onClick={() => setOpen(!open)} className="md:hidden text-2xl " >
                {
                    open === true ? <MdClose /> : <MdMenuOpen />
                }
            </div>
            <ul className={`md:flex duration-1000 items-center gap-10 text-lg absolute md:static
            ${open ? 'top-14' : '-top-72'}
            bg-sky-300 p-5 w-1/3 md:w-auto rounded-lg `}>
                {
                    routes.map((route) => <Link key={route.id} route={route} />)
                }
            </ul>
        </nav>
    );
};

// NavBar.propTypes = {};

export default NavBar;