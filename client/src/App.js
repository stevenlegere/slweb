// client/src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import MyAppBar from './Components/MyAppBar/MyAppBar';


// Make GET request to our server's /api route. To grab greating from server, and put it in a state variable called data. This will display a greeting from our server.

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);


  return (
    <main>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/MyAppBar" element={ <MyAppBar/> } />
      </Routes>
    </main>
  );
}

export default App;