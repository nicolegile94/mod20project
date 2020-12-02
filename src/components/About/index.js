import React from 'react';
import aboutImage from "../../assets/about/AboutMe.jpg";

function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <img src={aboutImage} style={{ width: "100%" }} alt="Nicole" />
        </section>
    );
}

export default About;