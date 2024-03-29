import React from 'react';
import MyAppBar from '../MyAppBar/MyAppBar';
import { Link } from 'react-router-dom';
import "../../App.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';


function Projects() {
    return (
        
        <div className="App">
            <MyAppBar />   
            {/* <header className="App-header"></header> */}
            <div className="content">
            <WbSunnyIcon className="App-WbSunnyIcon" fontSize="large" style={{ color: '#D8CC34', marginRight: '150px' }} />
            <br></br>
            <br></br>
                <Link to ="https://doggystuff.netlify.app/" style={{color: '#ff6d80'}} target="_blank">Doggy Stuff</Link><p style={{ color: '#2497ea', }}> A partner project for a fictional dog food brand</p>
                <h3 style={{ color: '#2497ea', }}>Problem Statement:</h3><p style={{ color: '#2497ea', }}> Create an easy to use UI that allows for an easy to use experience, the project is full stack with front-end, back-end and Auth.</p>
                <p style={{ color: '#2497ea', }}>Tech Stack: React / TypeScript / PostgreSQL / CSS / Bootstrap / Figma </p>
                <br></br>
                <Link to ="https://littr.netlify.app/" style={{color: '#ff6d80'}} target="_blank">LITTR</Link><p style={{ color: '#2497ea', }}> School of Code final project - 5 weeks to build a web App that would address a real-world issue.</p>
                <h3 style={{ color: '#2497ea', }}>Problem Statement:</h3><p style={{ color: '#2497ea', }}> Our environment is overrun with litter - by encouraging local communication and pride, we aim to help communities struggling to reclaim their green-spaces, beaches and neighbourhoods.</p>
                <p style={{ color: '#2497ea', }}>Tech Stack: React / Supabase / Netlify / React Testing Library / HTML / CSS / MUI / Figma / Trello.</p>
                <br></br>
                <br></br>
                <Link to ="https://javascript-react-vite-image-search.netlify.app/" style={{color: '#ff6d80'}} target="_blank">Image Search Web App</Link><p style={{ color: '#2497ea', }}> A little project to practice State management, Hooks, API integration, Error Handling, Styling and Event Handling</p>
                <p style={{ color: '#2497ea', }}>Tech Stack: React / JavaScript / Bootstrap / UnSplash API</p>
                <br></br>
                <br></br>
                <Link to ="./Drumkit" style={{color: '#ff6d80'}}>JavaScript Drum Kit</Link>
                <br></br>
                <br></br>
                <Link to ="./WeatherApp" style={{color: '#ff6d80'}}>Weather</Link>
                <br />
                <br />
                <Link to ="./Quiz" style={{color: '#ff6d80'}}>Quiz</Link>
        </div>
        </div>
        
    );
}
export default Projects;
