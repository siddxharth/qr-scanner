import React from 'react'
import GenerateQR from './GenerateQR';
import ScanQR from './ScanQR';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className='w-100 col'>
        <Link to="/generate"><Button style={{minWidth: "50vw"}}>Generate QR</Button></Link>
        <Link to="/scan"><Button style={{minWidth: "50vw"}}>Scan QR</Button></Link>
        <Outlet />
    </div>
  )
}
