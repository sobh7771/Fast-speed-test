import React from 'react';
import { ReactComponent as PauseIcon } from '../Assets/pause-black-18dp.svg';
import { ReactComponent as ReplayIcon } from '../Assets/replay-24px.svg';
import '../Assets/spinner.css';

const Button = ({ isLoading, onClick }) => {
	const styles = {
		button: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: 'transparent',
			width: '5rem',
			height: '5rem',
			borderRadius: '100%',
			border: '2px solid #2ab72a',
			marginTop: '1.5rem',
			cursor: 'pointer',
			position: 'relative',
		},
		img: {
			width: '3.5rem',
			fill: 'black',
		},
	};

	if (isLoading) {
		styles.button.border = '2px solid #d2d2d2';
		styles.img.fill = '#d2d2d2';
	}

	return (
		<button style={styles.button} onClick={!isLoading ? onClick : null}>
			{isLoading && <div className="spinner"></div>}
			{isLoading ? (
				<PauseIcon style={styles.img} />
			) : (
				<ReplayIcon style={styles.img} />
			)}
		</button>
	);
};

export default Button;
