import "./Profile.css";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Profile = ({ data }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section data-aos="flip-left" data-aos-delay="1500" data-aos-duration="1000" data-aos-once="false" id="profile" className="section">
            <p className="subheading-2">{data.catchy_line}</p>
            <h1 className="heading">{data.title}</h1>
            <div className="profile-content">
                <div data-aos="flip-left" data-aos-delay="2250" data-aos-duration="750" className="imgSection">
                    <img src={require("../../assets/me.png")} alt="me" className="img" />
                </div>
                <div className="details">
                    <p className="subheading-2">{data.greetings}</p>
                    <h1 className="heading">{data.name}</h1>
                    <p className="subheading-1">{data.role}</p>
                    <div className="online-links">
                        <a href={data.github} target="_blank"><i className="fa fa-github"></i></a>
                        <a href={data.linked_in} target="_blank"><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;