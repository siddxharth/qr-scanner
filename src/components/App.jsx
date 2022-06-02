import { useState } from 'react';
import GenerateQR from './GenerateQR'

function App() {
	const [text, setText] = useState(0);
	return (
		<>
			<GenerateQR text={text}/>
			<input onChange={(e) => setText(e.target.value)}/>
		</>
	);
}

export default App;
