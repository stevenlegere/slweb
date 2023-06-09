import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import MyAppBar from '../MyAppBar/MyAppBar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import logo from '../../logo.svg';

    const encodedEmail = 'c3RldmVubWFya2xlZ2VyZUBnbWFpbC5jb20=';

function SocialIcons() {
    return (
        <div
            style={{ display: 'flex', alignItems: 'center' }}> 
            <Link to="https://github.com/stevenlegere" style={{ color: '#2497ea', textDecoration: 'none' }}>
                <GitHubIcon />
            </Link>
            <Link to="https://www.linkedin.com/in/steven-legere-6b973476/" style={{ color: '#2497ea', textDecoration: 'none' }}><LinkedInIcon />
            </Link>
            <Link to="https://twitter.com/stevelegere" style={{ color: '#2497ea', textDecoration: 'none' }}><TwitterIcon />
            </Link>
        </div>
    );
}

function Home() {
    const decodedEmail = window.atob(encodedEmail);

    return (
        <div className="App">
            <MyAppBar />
            <header className="App-header">
            <WbSunnyIcon className="App-WbSunnyIcon" fontSize="large" style={{ color: '#D8CC34', marginRight: '150px' }} />
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Steven Légère</h1>
                <h3>Junior full stack developer</h3>
                <p>Alumni of <a href="https://schoolofcode.co.uk/" style={{ color: '#2497ea', }}>School of Code</a></p>
                <SocialIcons />
                <div className="contact-me">
                <a href={`mailto:${(decodedEmail)}`} style={{color: '#ff6d80',}}>Contact me</a>
                </div>
            </header>

    
            
        </div>
    );
}
export default Home;