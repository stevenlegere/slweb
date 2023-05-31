// client/src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import MyAppBar from './Components/MyAppBar/MyAppBar';
import About from './Components/About/About';
// import ContactForm from './Components/Contact/ContactForm';

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/MyAppBar" element={ <MyAppBar/> } />
        <Route path="/About" element={ <About/> } />
        {/* <Route path="/Contact/ContactForm" element={ <ContactForm/> } /> */}
      </Routes>
    </main>
  );
}

export default App;