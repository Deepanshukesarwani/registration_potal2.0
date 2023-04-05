import React from "react";
import Euphonylogo from "./asset/logo.png";
import DownArrow from "./asset/Vector (1).png";
import Insta from "./asset/insta.png";
import Youtube from "./asset/youtube.png";
import "./homepage.css";
import Reverb from './asset/reverbimage.png'
import { useNavigate} from 'react-router-dom';
const Homepage = () => {
    const navigate=useNavigate();

  return (
    <div>
      <div className="home_wrapper">
        <div className="homecontainer">
          <div className="homeUpperdiv">
            <div className="line1"></div>
            <div className="instaimg">
              <img src={Insta} alt="" />
            </div>
            <div className="uppercentercontent">
              <div className="euphonylogo">
                <img src={Euphonylogo} alt="euphonylogo" id="logoEu" />
              </div>
              <p id="homepage_heading1" style={{marginTop:"-1.3rem",fontSize:"2rem",letterSpacing:"0.5rem"}}>EUPHONY</p>
              <p id="homepage_heading2" style={{marginTop:"0.3rem",fontSize:"1.2rem",letterSpacing:"0.2rem"}}>Presents</p>
            </div>
          </div>
          <div className="homelowerdiv">
            <div className="youtubeimg">
              <img src={Youtube} alt="" />
            </div>
            <div className="line2"></div>
            <div className="homepage_reverbimg">
                <img src={Reverb} alt="" />
            </div>
            <div className="down-arrow">
              <img src={DownArrow} alt="" />
            </div>
            <div className="paraflex_container">
                <div className="para">
                 <p style={{fontSize:"1.2rem"}}>Welcome to REVERB'23, <br /> the annual recruitment drive of EUPHONY, the
                  premier musical society of AKGEC. EUPHONY is a platform for all
                  music enthusiasts to come together, explore their passion for
                  music, and showcase their talent. This society offers a diverse
                  range of opportunities, from participating in music competitions
                  to performing at college events and festivals.</p> <br /> <p style={{fontSize:"1.2rem"}}>REVERB'23 is the
                  perfect opportunity for new students to join EUPHONY and be a part
                  of this vibrant community. This year, the recruitment drive
                  promises to be bigger and better than ever before, with exciting
                  activities and events lined up for all music lovers. Whether
                  you're a vocalist, a guitarist, a drummer, or a keyboardist,
                  EUPHONY has something for everyone.</p > <br /><p style={{fontSize:"1.2rem"}}> So, if you have a passion for
                  music and want to be a part of a dynamic and talented community,
                  then REVERB'23 is the place to be. Come and join EUPHONY and be a
                  part of the music revolution at AKGEC!</p>
                </div>
            </div>
            <div className="but_register">
                <button id="register_but" onClick={() => {
                  navigate('/Formpage')
                }}>Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
