import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
       <h1>Swatantra Chaurasiya</h1>
      <Link to="/admin/dashboard" style={{ height: "30px", background: "green", padding: "10px", textDecoration: "none", color: "white", marginBottom: '10px' }}>Check Admin Dashboard Task 1</Link>
      <Link to="/resume" style={{ height: "30px", background: "green", padding: "10px", textDecoration: "none", color: "white" }}>Check Resume Task 2</Link>
    </div>
  );
}
