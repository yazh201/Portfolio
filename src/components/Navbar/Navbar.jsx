import { useState } from "react";
import "./Navbar.css"

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Navbar = () => {

    useEffect(() => {
        AOS.init({
            disable: function () {
                var maxWidth = 786;
                return window.innerWidth < maxWidth;
            }
        });
    }, [])

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navbar">
            <a data-aos="zoom-in" data-aos-duration="750" className="logo" href="/">Portfolio</a>
            <ul className={isNavExpanded ? "menu-list expanded" : "menu-list"}>
                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="250" onClick={() => setIsNavExpanded(!isNavExpanded)}><a className="menu-link" href="#profile">Profile</a></li>
                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500" onClick={() => setIsNavExpanded(!isNavExpanded)}><a className="menu-link" href="#about">About Me</a></li>
                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="750" onClick={() => setIsNavExpanded(!isNavExpanded)}><a className="menu-link" href="#skills">Skills</a></li>
                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000" onClick={() => setIsNavExpanded(!isNavExpanded)}><a className="menu-link" href="#projects">Projects</a></li>
                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1250" onClick={() => setIsNavExpanded(!isNavExpanded)}><a className="menu-link" href="#contact">Contact Me</a></li>
            </ul>
            <i className={isNavExpanded ? "fa fa-bars menu-icon rotate" : "fa fa-bars menu-icon"} onClick={() => setIsNavExpanded(!isNavExpanded)}></i>
        </nav>
    );
}

export default Navbar;