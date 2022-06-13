import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './app.css';
function ScanQR() {
  const [data, setData] = useState('No result');
  var constraints = { facingMode: 'environment' };
  return (
    <div className=''>
        <QrReader
          className=''
          constraints = {constraints}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          // change facing mode to main camera
        />
        <p>{data}</p>
    </div>
  );
}

export default ScanQR;