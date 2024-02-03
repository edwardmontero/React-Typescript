import { useState } from 'react';
import { Timer } from './Timer';

export const TimerPadre = () => {
	const [millisegundos, setMilliegundos] = useState(1000);

	return (
		<>
			<span>Millisegundos {millisegundos}</span>

			<br />
			<button className="btn btn-outline-success" onClick={() => setMilliegundos(1000)}>
				1000
			</button>
			<button className="btn btn-outline-success" onClick={() => setMilliegundos(2000)}>
				2000
			</button>

			<Timer milisegundos={millisegundos} />
		</>
	);
};
export default Timer;
