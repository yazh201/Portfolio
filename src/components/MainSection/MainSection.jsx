import "./MainSection.css"
import data from "../../data/data.json"

import About from "../About/About";
import Contact from "../Contact/Contact";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { useEffect, useRef } from "react";

const MainSection = () => {
    return (
        <div className="main-section">
            <Profile data={data.Profile} />
            <About data={data.about} />
            <Skills data={data.skill} />
            <Projects data={data.projects} />
            <Contact data={data.contact} />
        </div>
    );
}

export default MainSection;