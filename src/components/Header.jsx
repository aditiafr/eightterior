import { Bars3Icon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ListItem = ({ children, NavLink, onClick }) => {
    const location = useLocation();

    const isActive = (pathname) => {
        return location.pathname === pathname || location.pathname.startsWith(pathname + '/')
            ? 'block py-3 px-4 font-bold text-primary-500 bg-gray-200 md:rounded md:bg-transparent md:text-primary-500 md:p-0'
            : 'block py-3 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-500 md:p-0';
    };

    return (
        <li>
            <Link
                to={NavLink}
                onClick={onClick}
                className={`${isActive(NavLink)}`}
            >
                {children}
            </Link>
        </li>
    );
};

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [useLocation().pathname]);

    const handleClose = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        // <Navbar fluid rounded className={`fixed w-full px-36 z-50 top-0 start-0 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        //     <NavbarBrand href="/">
        //         <img src="/assets/images/logo.png" className="h-12 lg:h-20" alt="Eightterior Logo" />
        //     </NavbarBrand>
        //     <div className="flex md:order-2">
        //         <h1 className="text-primary-500 font-extrabold text-3xl hidden lg:block">Eight<span className="text-second-500">terior</span></h1>
        //         <NavbarToggle onClick={handleToggle} />
        //     </div>
        //     <NavbarCollapse className={`bg-white md:bg-transparent rounded-md mt-2 max-md:shadow-md max-md:shadow-gray-400 ${isOpen ? 'block' : 'hidden'}`}>
        //         <ListItem NavLink="/" onClick={handleClose}>
        //             Home
        //         </ListItem>
        //         <ListItem NavLink="/projects" onClick={handleClose}>
        //             Projects
        //         </ListItem>
        //         <ListItem NavLink="/about" onClick={handleClose}>
        //             About
        //         </ListItem>
        //         <ListItem NavLink="/contact-us" onClick={handleClose}>
        //             Contact Us
        //         </ListItem>
        //     </NavbarCollapse>
        // </Navbar>


        <nav className={`fixed w-full z-20 top-0 start-0 ${isScrolled ? 'bg-white shadow-sm shadow-gray-200' : 'bg-transparent'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={`/`} className="flex items-center space-x-3 rtl:space-x-reverse transition duration-300 ease-in-out hover:scale-110 hover:z-10">
                    <img src="/assets/images/logo.png" className="w-14 md:w-20" alt="Eightterior Logo" />
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link to={`/`} className="hidden md:flex items-center space-x-3 rtl:space-x-reverse transition duration-300 ease-in-out hover:scale-110 hover:z-10">
                        <img src="/assets/images/logo-text.png" className="w-32 md:w-44" alt="Eightterior Logo Text" />
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 justify-center text-primary-500 rounded-lg md:hidden focus:outline-none"
                    >
                        <Bars3Icon className="w-10 h-10 text-primary-500 transition duration-300 ease-in-out hover:scale-110 hover:z-10" />
                    </button>
                </div>
                <div className={`items-center justify-between ${isMenuOpen ? 'flex bg-white' : 'hidden'} w-full md:flex md:w-auto md:order-1 ${!isScrolled ? 'rounded-xl' : ''}`}>
                    <ul className="flex flex-col p-2 md:p-0 mt-4 font-medium md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 w-full">
                        <ListItem NavLink="/" onClick={handleClose}>
                            Home
                        </ListItem>
                        <ListItem NavLink="/projects" onClick={handleClose}>
                            Projects
                        </ListItem>
                        <ListItem NavLink="/about" onClick={handleClose}>
                            About
                        </ListItem>
                        <ListItem NavLink="/contact-us" onClick={handleClose}>
                            Contact Us
                        </ListItem>
                    </ul>
                </div>
            </div>
        </nav>


    );
};

export default Header;
