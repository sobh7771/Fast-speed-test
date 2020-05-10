import React, { useEffect, useState, useMemo, useCallback } from 'react';
import FastSpeedtest from 'fast-speedtest-api';
import Logo from './components/Logo';
import SpeedMessage from './components/SpeedMessage';
import SpeedValue from './components/SpeedValue';
import SpeedUnit from './components/SpeedUnit';
import Button from './components/Button';

function App() {
	const [speedValue, setSpeedValue] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const speedtest = useMemo(
		() =>
			new FastSpeedtest({
				token: 'YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm',
				// verbose: true,
				timeout: 10000,
				unit: FastSpeedtest.UNITS.Mbps,
			}),
		[]
	);

	const getInternetSpeed = useCallback(() => {
		setSpeedValue(0);
		setIsLoading(true);
		speedtest.getSpeed().then((speed) => {
			setSpeedValue(Math.round(speed));
			setIsLoading(false);
		});
	}, [speedtest]);

	useEffect(() => {
		getInternetSpeed();
	}, [getInternetSpeed]);

	const onClick = () => {
		getInternetSpeed();
	};

	return (
		<div
			style={{
				textAlign: 'center',
				marginTop: '1rem',
				color: isLoading && '#d2d2d2',
			}}>
			<Logo />
			<SpeedMessage />
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<SpeedValue speedValue={speedValue} />
				<div
					style={{
						marginLeft: '2rem',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<SpeedUnit />
					<Button isLoading={isLoading} onClick={onClick} />
				</div>
			</div>
		</div>
	);
}

export default App;
