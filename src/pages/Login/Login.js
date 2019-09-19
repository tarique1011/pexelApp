import React, { Component } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { validateEmail } from '../../utils';
import './Login.css';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			emailError: '',
			passwordError: ''
		};
	}

	onChangeEmail = event => {
		this.setState({ email: event.target.value });
	};

	onChangePassword = event => {
		this.setState({ password: event.target.value });
	};

	validateAndSubmit = () => {
		this.setState({ emailError: '', passwordError: '' });
		let validation = validateEmail(this.state.email);
		if (validation) {
			if (this.state.password) {
				this.handleSubmit();
			} else {
				this.setState({ passwordError: 'Please enter a password!' });
			}
		} else {
			this.setState({ emailError: 'Please enter a valid email!' });
		}
	};

	handleSubmit = async () => {
		let user = { user: this.state.email, password: this.state.password };
		localStorage.setItem('user', JSON.stringify(user));
		window.location.href = '/home';
	};

	renderHeader() {
		return (
			<div className="header">
				<span className="headerTitle">Pexel</span>
				<span className="headerSubtitle">View. Click. Save</span>
			</div>
		);
	}

	renderFooter() {
		return (
			<div className="footer">
				<span className="signIn">SIGN IN</span>
				<Input
					type="text"
					inputName="email"
					inputLabel="EMAIL"
					placeholder="Enter your email"
					value={this.state.email}
					onChange={this.onChangeEmail}
					error={this.state.emailError}
				/>
				<Input
					type="password"
					inputName="password"
					inputLabel="PASSWORD"
					placeholder="Enter your password"
					value={this.state.password}
					onChange={this.onChangePassword}
					error={this.state.passwordError}
				/>
				<Button onClick={this.validateAndSubmit}>Submit</Button>
			</div>
		);
	}

	render() {
		return (
			<div className="loginContainer">
				{this.renderHeader()}
				{this.renderFooter()}
			</div>
		);
	}
}
