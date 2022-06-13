import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './app.css';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

function ScanQR() {
  const [data, setData] = useState('No result');
  var constraints = { facingMode: 'environment', aspectRatio: 1, width: { ideal: 400 }, frameRate: { ideal: 60, max: 60 }, autoGain: true };
  return (
    <>
    <Link to="/generate"><Button style={{minWidth: "50vw"}}>Generate QR</Button></Link>
    <Link to="/scan"><Button style={{minWidth: "50vw"}}>Scan QR</Button></Link>
    <div className='qr-scanner'>
        <QrReader
          className='qr-scanner__video'
          constraints = {constraints}
          videoContainerStyle={{
            borderRadius: '15px',
          }}
          videoStyle={{
            borderRadius: '15px',
          }}
          onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }
          }
        />
        <p>{data}</p>
    </div>
    </>
  );
}

export default ScanQR;