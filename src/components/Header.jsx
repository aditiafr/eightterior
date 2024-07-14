import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ListItem = ({ children, NavLink, onClick }) => {
    const location = useLocation();

    const isActive = (pathname) => {
        return location.pathname === pathname
            ? 'block py-3 px-4 font-bold text-primary-500 bg-gray-200 md:rounded md:bg-transparent md:text-primary-500 md:p-0'
            : 'block py-3 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-500 md:p-0';
    };

    return (
        <Link
            to={NavLink}
            onClick={onClick}
            className={`${isActive(NavLink)}`}
        >
            {children}
        </Link>
    );
};

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Navbar fluid rounded className={`fixed w-full z-50 top-0 start-0 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <NavbarBrand href="/">
                <img src="/assets/images/logo.png" className="h-12 lg:h-20" alt="Eightterior Logo" />
            </NavbarBrand>
            <div className="flex md:order-2">
                <h1 className="text-primary-500 font-extrabold text-3xl hidden lg:block">Eight<span className="text-second-500">terior</span></h1>
                <NavbarToggle onClick={handleToggle} />
            </div>
            <NavbarCollapse className={`bg-white md:bg-transparent rounded-md mt-2 max-md:shadow-md max-md:shadow-gray-400 ${isOpen ? 'block' : 'hidden'}`}>
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
            </NavbarCollapse>
        </Navbar>
    );
};

export default Header;
