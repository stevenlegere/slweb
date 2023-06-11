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
