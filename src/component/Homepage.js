import React from "react";
import Euphonylogo from "./asset/image 1.png";
import Insta from "./asset/insta.png";
import Youtube from "./asset/youtube.png";
import "./homepage.css";
import Reverb from './asset/reverbimage.png'
const Homepage = () => {
  return (
    <div>
      {/* <h1>Hello Dosto</h1> */}
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
              <h1 id="homepage_heading1">EUPHONY</h1>
              <h6 id="homepage_heading2">Presents</h6>
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
            <div className="para">
              Welcome to REVERB'23, the annual recruitment drive of EUPHONY, the
              premier musical society of AKGEC. EUPHONY is a platform for all
              music enthusiasts to come together, explore their passion for
              music, and showcase their talent. This society offers a diverse
              range of opportunities, from participating in music competitions
              to performing at college events and festivals. REVERB'23 is the
              perfect opportunity for new students to join EUPHONY and be a part
              of this vibrant community. This year, the recruitment drive
              promises to be bigger and better than ever before, with exciting
              activities and events lined up for all music lovers. Whether
              you're a vocalist, a guitarist, a drummer, or a keyboardist,
              EUPHONY has something for everyone. So, if you have a passion for
              music and want to be a part of a dynamic and talented community,
              then REVERB'23 is the place to be. Come and join EUPHONY and be a
              part of the music revolution at AKGEC!
            </div>
            <div className="but_register">
                <button id="register_but">Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
