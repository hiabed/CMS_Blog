import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import Articles from './Articles';
import Post from './Post';
import Footer from './Footer'
import { useScroll, useMotionValueEvent } from "framer-motion";
import React from 'react';

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

const HomePage = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  return (
    <div className="App" style={app}>
      <div className="navig" style={{backgroundColor: scrolled ? "#0B0B0B" : "transparent",top: scrolled ? 0 : 20,transition: "all 0.3s ease",}}>
        <div style={{marginLeft: 40}} className="logo">
          <h1 className='logo-name'>Blog</h1>
        </div>
          <div style={{display: "flex"}}>
            <a className='nav' href="#Portfolio" style={{marginRight: 25}}>Articles</a>
            <a className='nav' href="#Contact" style={contact}>+ New post</a>
          </div>
      </div>
      <div className='main' id="main" style={mainStyle}>
        <div className="myPicture" style={myPic}>
          <div id="me">
            <img src="blog.jpg" alt="My Picture" style={{height: "100%", width: "100%", borderRadius: "50%"}} /> {/* Ensure blog.jpg is in the correct location */}
          </div>
        </div>
        <div className='per-infos'>
          <h3 className='hi'>Hello, welcome</h3>
          <h1 className='my-name'>To our Blog</h1>
          <p className='title'>Articles / comments and many more.</p>
          <div className='socials'>
            <a href="mailto:abed.hassani.idrissi@gmail.com?subject=Opportunity for Collaboration" target='_blank' rel="noopener noreferrer" className='social'><FontAwesomeIcon icon={faAt} style={{fontSize: 34}}/></a>
            <a href='https://github.com/hiabed' target='_blank' rel="noopener noreferrer" className='social'><FontAwesomeIcon icon={faGithub} style={{fontSize: 34}}/></a>
            <div href='https://github.com/hiabed' className='social'>
              <a href='https://www.linkedin.com/in/mohammed-abed-hassani-idrissi/' id="linked" target='blank_' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} style={{fontSize: 24}} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Articles />
      <Post />
      <Footer />
    </div>
  );
}

export default HomePage;