import "./Contact.css"

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Contact = ({ data }) => {

    useEffect(() => {
        AOS.init({ disable: 'mobile' });
    }, [])

    return (
        <section data-aos="fade-down" data-aos-duration="1000" id="contact" className="section">
            <p className="subheading-2">{data.catchy_line}</p>
            <h1 className="heading">{data.title}</h1>
            <div className="contact-content">
                <div className="contact-link">
                    <i class="fa fa-envelope" id="link-icon"></i>
                    <a className="info" href={"mailto:" + data.email}>{data.email}</a>
                </div>
                <div className="contact-link">
                    <i className="fa fa-linkedin" id="link-icon"></i>
                    <a className="info" href={data.linked_in} target="_blank">Vivekayazhini C N</a>
                </div>
            </div>
        </section>

    );
}

export default Contact;