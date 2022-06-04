import React, { useState } from 'react';
import QRCode from './QRCodeCanvas'
import { FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScanQR from './ScanQR';

function GenerateQR() {
	const [text, setText] = useState('');
	const download = () => {
        const canvas = document.getElementById('canvas');
        var url = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = url;
        link.click();
    }
	const btn_status = `${text === '' ? "disabled" : ""}`
	const clear_status = `${text === '' ? "disabled" : ""}`
	return (
		<div className="d-flex justify-content-center align-items-center"  style={{minHeight: '100vh'}}>
			<div className='d-flex justify-content-center row align-items-center'>
				<QRCode text={text}/>
				<FormControl value={text} className="mt-3" onChange={(e) => setText(e.target.value)} placeholder="Start entering text..." />
				<div>
					<Button className={`m-3 text-center ${btn_status}`} onClick={() => download()}>Download</Button>
					<Button variant="secondary" className={`m-3 text-center ${clear_status}`} onClick={() => setText('')}>Clear</Button>
				</div>
			</div>
		</div>
	);
}

export default GenerateQR;
