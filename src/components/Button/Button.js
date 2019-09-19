import React from 'react';
import './Button.css';

const Button = props => {
	const { children, onClick, buttonStyle, buttonTextStyle } = props;
	return (
		<button className="buttonContainer" style={buttonStyle} onClick={onClick}>
			<span className="buttonText" style={buttonTextStyle}>
				{children}
			</span>
		</button>
	);
};

export default Button;
