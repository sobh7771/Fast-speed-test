import React from 'react';
import logo from '../Assets/new-logo-vert-37861c.svg';

const Logo = () => {
	return <img style={style} src={logo} alt="Site logo" />;
};

const style = {
	display: 'inline-block',
	width: '10%',
};

export default Logo;
