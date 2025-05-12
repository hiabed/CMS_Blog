import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer'
import { useScroll, useMotionValueEvent } from "framer-motion";
import React from "react";

const mainStyle = {
  width: "100%",
  height: "1022px",
  backgroundColor: "#D7D7D7",
  position: "relative",
  overflow: "hidden",
}

const myPic = {
  width: "60%",
  height: 1374,
  backgroundColor: "black",
  position: "absolute",
  right: -90,
  transform: "rotate(9.67deg)",
  top: -90,
  zIndex: 0,
}

const app = {
  width: "100vw",
  display: "flex",
  backgroundColor: "#D7D7D7",
  flexDirection: "column",
  alignItems: "center",
}

const contact = {
  height: 46,
  width: 147,
  borderRadius: 23,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
  backgroundColor: "white",
  fontSize: 15,
}

function App() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <div className="App" style={app}>
      <div className="navig" style={{backgroundColor: scrolled ? "#0B0B0B" : "transparent",top: scrolled ? 0 : 20,transition: "all 0.3s ease",}}>
          <a className='nav' href="#About">About me</a>
          <a className='nav' href="#Skills">Skills</a>
          <a className='nav' href="#Portfolio" style={{marginRight: 25}}>Portfolio</a>
          <a className='nav' href="#Contact" style={contact}>CONTACT ME</a>
      </div>
      <div className='main' id="main" style={mainStyle}>
        <div className="myPicture" style={myPic}>
          <div id="me">
            <img src="me-removebg-preview.png" alt="My Picture" style={{height: 706,}} />
          </div>
        </div>
        <div className='per-infos'>
          <h3 className='hi'>Hi, I am</h3>
          <h1 className='my-name'>Mohammed-Abed Hassani-Idrissi</h1>
          <p className='title'>Software Developer / Front-end Enthusiast</p>
          <div className='socials'>
            <a href="mailto:abed.hassani.idrissi@gmail.com?subject=Opportunity for Collaboration" target='blank_' rel="noopener noreferrer" className='social'><FontAwesomeIcon icon={faAt} style={{fontSize: 34}}/></a>
            <a href='https://github.com/hiabed' target='blank_' rel="noopener noreferrer" className='social'><FontAwesomeIcon icon={faGithub} style={{fontSize: 34}}/></a>
            <div href='https://github.com/hiabed' className='social'>
              <a href='https://www.linkedin.com/in/mohammed-abed-hassani-idrissi/' id="linked" target='blank_' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} style={{fontSize: 24}} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='description-container' style={{height: isOpened ? "460px" : 313, transition: 'height 0.2s ease'}}>
        <div className='description-child'>
          <h2 className='berries'>BIOGRAPHY</h2>
          <p className='description' style={{height: isOpened ? '144.88px' : 89, transition: 'height 0.5s ease'}}>
            I'm a frontend developer who specializes in building clean, responsive, 
            user-friendly interfaces using modern web technologies like HTML, CSS, JavaScript, and React. 
            Alongside my frontend focus, I have a strong foundation in software development 
            with experience in languages like C and C++, which has given me a deeper understanding of performance,
            memory, and system-level behavior. I enjoy crafting visually appealing experiences and am 
            always motivated to find efficient solutions to real-world problems.
          </p>
          <p className='read-more' onClick={()=> isOpened ? setIsOpened(false) : setIsOpened(true)}>{isOpened ? "SHOW LESS": "READ MORE"}</p>
        </div>
        <div className='it-container'>
          <h1 className='it'>IT</h1>
        </div>
      </div>
      <div id='aboutnskills'>
        <About />
        <Skills/>
      </div>
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
