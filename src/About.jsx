import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        AOS.init({
        });
        }, []);
    return (
    <div id="About" data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
        <h1 className='about'>ABOUT ME</h1>
        <p className="about-description">
            Over two years of focused learning and hands-on project-building have given me the confidence to contribute
            value in any digital-focused environment, regardless of tech stack or tools. My journey began with online
            platforms like Codecademy and freeCodeCamp, where I explored Ruby, JavaScript, and Responsive Web Design.
            I later joined 1337, a high-quality peer-learning program, where I completed 24 challenging projects—solo and
            team-based—across various domains, including Full-Stack Web Development, OOP, Algorithms,
            Multithreading, Unix Systems, Virtualization, Gaming, and DevOps.
            This experience taught me how to independently learn, adapt, and deliver in real-world scenarios with people
            from diverse backgrounds. Some of my projects are listed below.
        </p>
        <a href='./My_Resume.pdf' target='blank_' className='read-more resume' style={{borderColor: "black", color: "black", textDecoration: "none"}}><FontAwesomeIcon style={{width: "fit-content"}} icon={faEye} />RESUME</a>
        <div className="separator"></div>
        <div className="knowledges">
            <div className="knowledge" style={{width: 468}} data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
                <div className="h1">
                    <div className="design sign"></div>
                    <h1>Front-End Development</h1>
                </div>
                <p>
                    I build dynamic, responsive, and user-friendly web interfaces with JavaScript, HTML5, CSS3, and Bootstrap.
                    From hand-coded SPAs to modern React apps with hooks and React Router, I create seamless, interactive experiences.
                    I focus on both functionality and design, delivering layouts that are visually appealing and highly usable.
                </p>
            </div>
            <div className="knowledge" style={{width: 483}} data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
                <div className="h1">
                    <div className="development sign"></div>
                    <h1>Object-oriented programming</h1>
                </div>
                <p>
                    Object programming principles in C++, classes, namespaces, constructors and destructors,
                    memory management in C++, inheritance, abstraction, overloading, templates, standard C++ library types and tools
                </p>
            </div>
            <div className="knowledge" style={{width: 487}} data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
                <div className="h1">
                    <div className="maintenance sign"></div>
                    <h1>Imperative programming</h1>
                </div>
                <p>
                    Basics of coding in C : the C syntax, variable, loops, conditional branches, functions, recursivity,
                    instructions, calculus and expressions, comparisons operators, standard and advanced types, strings processing, structures, includes
                    and libraries, memory allocation and release, linked lists, trees, the C standard library
                </p>
            </div>
        </div>
        <div className="separator" style={{marginTop: 80}}></div>
    </div>
    )
}

export default About;