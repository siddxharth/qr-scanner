import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
function ScanQR() {
  const [data, setData] = useState('No result');

  return (
    <div className='d-flex row justify-content-center align-items-center' style={{ minWidth: "40vw", minHeight: "40vh", maxHeight: "60vh", maxWidth: '60vw'}}>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          // change facing mode to main camera
          facingMode="rear"
        />
        <p>{data}</p>
    </div>
  );
}

export default ScanQR;