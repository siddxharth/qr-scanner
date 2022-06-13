import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className='' style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", minHeight: "100vh"}}>
        <Link to="/generate"><Button style={{aspectRation: "1/1", minWidth: "25vw", minHeight: "25vw"}}>Generate QR</Button></Link>
        <Link to="/scan"><Button style={{aspectRation: "1/1", minWidth: "25vw", minHeight: "25vw"}}>Scan QR</Button></Link>
        <Outlet />
    </div>
  )
}
