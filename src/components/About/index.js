import React from 'react';
import aboutImage from "../../assets/about/AboutMe.jpg";

function About() {
    return (
        <section class="content">
            <img src={aboutImage} class="image" alt="Nicole" />
            <p class="center">Nicole graduated from UW-Madison in 2016 with degrees in Psychology and History. Since graduation Nicole has been a software tester for a wide variety of products. With this QA background she has branched into Development, and is working on completing a Web Development Bootcamp with the goal to be a full stack web developer.</p>
        </section>
    );
}

export default About;