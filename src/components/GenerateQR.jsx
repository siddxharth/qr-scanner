import React, { useState } from 'react';
import QRCode from './QRCodeCanvas'
import { FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

function GenerateQR() {
	const randomString = () => {
		const lowCase = "abcdefghijklmnopqrstuvxyz";
		const upCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
		const Numbers = "0123456789";
		const SpecialChar = "£$&()*+[]@#^-_!?";
		const charCategory = [lowCase, upCase, Numbers, SpecialChar];
		const passwordLength = 64;
		let password = "";
		for (let i = 0; i < passwordLength; i++) {
			const random = Math.floor(Math.random() * 4);
			const randomChar = Math.floor(Math.random() * charCategory[random].length);
			password += charCategory[random][randomChar];
		}
		return password;
	}
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
		<>
			<Link to="/generate"><Button style={{minWidth: "50vw"}}>Generate QR</Button></Link>
			<Link to="/scan"><Button style={{minWidth: "50vw"}}>Scan QR</Button></Link>
			<div className="d-flex justify-content-center align-items-center"  style={{minHeight: '100vh'}}>
				<div className='d-flex justify-content-center row align-items-center'>
					<QRCode text={text}/>
					<FormControl value={text} className="mt-3" onChange={(e) => setText(e.target.value)} placeholder="Start entering text..." />
					<div>
						<Button className={`m-3 text-center ${btn_status}`} onClick={() => download()}>Download</Button>
						<Button variant="secondary" className={`m-3 text-center ${clear_status}`} onClick={() => setText('')}>Clear</Button>
						<Button variant='warning' className={`m-3 text-center`} onClick={() => setText(randomString())}>Randomize</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default GenerateQR;