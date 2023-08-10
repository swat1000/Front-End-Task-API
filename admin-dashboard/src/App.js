import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; 
import './App.css'; 
import Resume from './pages/Resume'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path='/' element= {<Home/>}/>
        <Route exact path='/admin/dashboard' element= {<Dashboard/>}/>
        <Route exact path='/Resume' element= {<Resume/>}/>
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
