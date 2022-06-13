import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GenerateQR from './components/GenerateQR';
import ScanQR from './components/ScanQR';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			{/* <Route path='/' element={<App />}> */}
			<Route path='/generate' element={<GenerateQR />} />
			<Route path='/scan' element={<ScanQR />} />
			{/* </Route> */}
		</Routes>
	</BrowserRouter>
);