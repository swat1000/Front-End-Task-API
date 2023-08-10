import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; // Import your Dashboard component
import './App.css'; // You can import your CSS or Tailwind styles here

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path='/admin/dashboard' element= {<Dashboard/>}/>
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
