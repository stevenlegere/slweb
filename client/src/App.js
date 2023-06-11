// client/src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import MyAppBar from './Components/MyAppBar/MyAppBar';
import About from './Components/About/About';
import Projects from './Components/Projects/projects';
import DrumKit from './Components/Projects/drumKit/drumKit';
import WeatherApp from './Components/Projects/WeatherApp/WeatherApp';
import Quiz from './Components/Projects/Quiz/Quiz';
// import ContactForm from './Components/Contact/ContactForm';

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/MyAppBar" element={ <MyAppBar/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/Projects" element={ <Projects/> } />
        {/* <Route path="/Contact/ContactForm" element={ <ContactForm/> } /> */}
        <Route path="/Projects/drumKit" element={<DrumKit />} />
        <Route path="/Projects/WeatherApp" element={<WeatherApp />} />
        <Route path="/Projects/Quiz" element={<Quiz />} />
      </Routes>
    </main>
  );
}

export default App;