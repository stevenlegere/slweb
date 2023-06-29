import React from "react";
import "../../App.css";
import MyAppBar from "../MyAppBar/MyAppBar";
import "../Video/Video.css";
import YoutubeEmbed from "../Video/Video";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function About() {
  return (
    <div className="App">
      <MyAppBar />
      <header>
      <div>
      </div>
        <div className="AboutHeader">
          <h1>About Me</h1>
          <p>Here's my 10(ish) second intro</p>
        </div>
        <div>
          <YoutubeEmbed embedId="yxVf04wCGYg" />
        </div>
        <div className="icon-heading">
          <WbSunnyIcon
            className="App-WbSunnyIcon"
            fontSize="large"
            style={{ color: "#D8CC34", marginRight: "25px" }}
          />
          <h2>Profile</h2>
        </div>
        <div className="AboutMeText">
          <p>
            I am a junior developer in training, currently on an incredible
            journey to become a full stack developer with The School of Code. I
            hold a 1st Class BA Hons Degree in Visual Communication from
            Birmingham City University. I’m the former Picture Editor of
            Metro.co.uk, with this I bring a great depth of life experience,
            team focused energy and a unique skill set to an industry that I
            feel will be my home for many years ahead. My ability to think
            visually comes from many years of graphic design, art direction and
            in more recent years as a picture editor within some of the most
            competitive newspapers and their online editions.
            <br></br>I now feel beyond grateful to part of the School of Code
            cohort 14 class. Learning full stack development has, and is
            becoming one of the great challenges of my life, hand on heart i’ve
            never enjoyed the leaner journey quite as much as this experience
            i’m on now.
            <br></br>
            My journey so far has seen me develop skills in HTML, CSS, JavaScript, Node JS and SQL. Developing JavaScript with in-depth research,
            understanding and training in the DOM, React, React Router and React
            Libraries such as Material UI. I am also developing my knowledge in
            Unit and E2E testing in Jest and Playwright. I have a natural
            affinity with UI and UX, particularly UI from my education in Visual
            Communication, I’ve really embraced the use of Figma for all our
            projects so far on the Bootcamp. With this in mind, it is JavaScript
            and React fundamentals where my energy is focussed to truly become a
            well rounded Full Stack Developer.
            <br></br>
            All of these skills are being reinforced by a tremendous cohort who
            all support each other, help develop and share ideas through
            knowledge and collaboration. Pair programming has been encouraged
            from the beginning of our training, which I feel has accelerated
            learning and problem solving considerably.
            <br></br>
            Thanks for taking the time to read my profile.
          </p>
        </div>
      </header>
    </div>
  );
}

export default About;
