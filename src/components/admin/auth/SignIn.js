import React, {Component} from 'react';
import {Inputs} from '../../helpers/Inputs'
import {connect} from 'react-redux';
import {signIn} from '../../../store/actions/authActions';
import {Redirect} from 'react-router-dom';


class SignIn extends Component {
		state = {
		email: '',
		password: ''
	}

		handleChange =(e) => {
			// const {id, value} = e.target;
		this.setState({
			// [id]:[value]
		[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state)
		this.props.signIn(this.state)
	}

	render() {
		// console.log(this.props)
				const {auth} = this.props;
				// console.log(auth.uid)
		if (auth.uid) return <Redirect to="/" />

		return (
			<div className="ui container">
				<form onSubmit={this.handleSubmit} className="ui form" >
					<Inputs label="Email" type="email" id="email" onChange={this.handleChange}/>
					<Inputs label="Password" type="password" id="password" onChange={this.handleChange} />
					<button className="ui button">Sign In</button>

				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	// console.log(state)
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth
	}
}

// we imported the signin function from the authActions, then connect the dispatch function to sign in
const mapDispatchToProps = (dispatch) => {
	// console.log(dispatch)
	return {
		signIn: (creds) => dispatch(signIn(creds))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)