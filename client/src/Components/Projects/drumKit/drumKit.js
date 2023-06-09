import React, { useEffect } from "react";
import MyAppBar from "../../MyAppBar/MyAppBar";
import "./style.css";
import clapSound from "./sounds/clap.wav";
import hihatSound from "./sounds/hihat.wav";
import kickSound from "./sounds/kick.wav";
import openhatSound from "./sounds/openhat.wav";
import boomSound from "./sounds/boom.wav";
import rideSound from "./sounds/ride.wav";
import snareSound from "./sounds/snare.wav";
import tomSound from "./sounds/tom.wav";
import tinkSound from "./sounds/tink.wav";

function DrumKit() {
  useEffect(() => {
    function playSound(keyCode) {
      const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${keyCode}"]`);
      if (!audio) return;
      audio.currentTime = 0;
      
      // Check if the audio can be played
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio playback started successfully
            key.classList.add("playing");
          })
          .catch((error) => {
            // Error occurred while starting audio playback
            console.error("Failed to play audio:", error);
          });
      }
    }

    function removeTransition(e) {
      if (e.propertyName !== "transform") return;
      e.target.classList.remove("playing");
    }

    function handleKeyDown(e) {
      playSound(e.keyCode);
    }

    function handleTouchStart(e) {
      const keyCode = e.currentTarget.dataset.key;
      playSound(keyCode);
    }

    function handleTouchEnd(e) {
      const keyCode = e.currentTarget.dataset.key;
      const key = document.querySelector(`.key[data-key="${keyCode}"]`);
      if (key) {
        key.classList.remove("playing");
      }
    }

    const keys = document.querySelectorAll(".key");
    keys.forEach((key) =>
      key.addEventListener("transitionend", removeTransition)
    );
    window.addEventListener("keydown", handleKeyDown);
    keys.forEach((key) => {
      key.addEventListener("touchstart", handleTouchStart);
      key.addEventListener("touchend", handleTouchEnd);
    });

    return () => {
      keys.forEach((key) =>
        key.removeEventListener("transitionend", removeTransition)
      );
      window.removeEventListener("keydown", handleKeyDown);
      keys.forEach((key) => {
        key.removeEventListener("touchstart", handleTouchStart);
        key.removeEventListener("touchend", handleTouchEnd);
      });
    };
  }, []);

  return (
    <div>
      <MyAppBar />
      <h1 className="header">Drum Kit built with JavaScript using React</h1>
      <h1 className="emoji">🥁</h1>

      <div className="keys">
        <div data-key="65" className="key">
          <kbd>A</kbd>
          <span className="sound">clap</span>
        </div>
        <div data-key="83" className="key">
          <kbd>S</kbd>
          <span className="sound">hihat</span>
        </div>
        <div data-key="68" className="key">
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </div>
        <div data-key="70" className="key">
          <kbd>F</kbd>
          <span className="sound">openhat</span>
        </div>
        <div data-key="71" className="key">
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </div>
        <div data-key="72" className="key">
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </div>
        <div data-key="74" className="key">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div data-key="75" className="key">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
        <div data-key="76" className="key">
          <kbd>L</kbd>
          <span className="sound">tink</span>
        </div>
      </div>
      <div className="drumKitText">
        <p>
          In my latest personal project, I wanted to practice by working through a{" "}
          <a href="https://javascript30.com/" style={{ color: "#ff6d80" }}>
            JavaScript 30
          </a>{" "}
          tutorial by drilling home some great Vanilla JavaScript, and then re-factor
          into React. The bonus is I now have two code sets I can look back on at any time.
        </p>
        <p>
          To begin, I followed the JavaScript 30 tutorial and completed the project
          using vanilla JavaScript and HTML. This allowed me to understand the core
          functionality and logic behind the project. Once I had a solid grasp of the
          original implementation, I decided to take it a step further by converting it
          to a React application.
        </p>
        <p>
          First, I created a new React component called DrumKit to encapsulate the
          entire project. I transferred the relevant HTML code from the tutorial into the
          render method of the DrumKit component, ensuring that all the necessary
          elements and classes were included.
        </p>
        <p>
          Next, I used the useEffect hook to handle the event listeners and sound
          playback. I translated the original JavaScript functions, such as playSound
          and removeTransition, into their respective useEffect callbacks. This allowed
          me to listen for keyboard and touch events and trigger the corresponding sound playback
          within the React component.
        </p>
      </div>

      <audio data-key="65" src={clapSound}></audio>
      <audio data-key="83" src={hihatSound}></audio>
      <audio data-key="68" src={kickSound}></audio>
      <audio data-key="70" src={openhatSound}></audio>
      <audio data-key="71" src={boomSound}></audio>
      <audio data-key="72" src={rideSound}></audio>
      <audio data-key="74" src={snareSound}></audio>
      <audio data-key="75" src={tomSound}></audio>
      <audio data-key="76" src={tinkSound}></audio>
    </div>
  );
}

export default DrumKit;
