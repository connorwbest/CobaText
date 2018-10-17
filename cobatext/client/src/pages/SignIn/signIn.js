import React from 'react';
import {Link} from 'react-router-dom';

const SignIn = (props)=> {
	return (
		<div className='signIn'>
			<h1 className='signIn-head'>SIGN IN</h1>
			<Link to = "/signup" >Go to sign up</Link>
			<form>
				<label className='signIn-label'>Email</label><br/>
				<input className='signIn-input' value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label className='signIn-label'>Password</label><br/>
				<input className='signIn-input' name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button className='signIn-btn' type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
			</form>
		</div>
	);
};

export default SignIn;