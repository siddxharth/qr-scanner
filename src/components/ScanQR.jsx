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
          videoContainerStyle={{marginTop: "100px", marginBottom: '20px', marginLeft: 'calc(calc(100vw - 50vh) / 2)', minHeight: "30vh", maxHeight: "50vh"}}
          videoStyle={{
            minWidth: "20vh", minHeight: "20vh",
            maxWidth: "50vh", maxHeight: "50vh",
            borderRadius: '2em',
            backgroundColor: '#dedede',
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
        <p className='data'>{data}</p>
    </div>
    </>
  );
}

export default ScanQR;