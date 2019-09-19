import React from 'react';
import './Input.css';

const Login = props => {
	const { inputName, inputLabel, onChange, value, type, placeholder, error } = props;
	return (
		<div className="inputContainer">
			<label className="inputLabel" htmlFor={inputName}>
				{inputLabel}
			</label>
			<input
				className="inputArea"
				placeholder={placeholder}
				type={type}
				value={value}
				id={inputName}
				name={inputName}
				onChange={onChange}
			/>
            <span className="errorMessage">{error}</span>
		</div>
	);
};

export default Login;
