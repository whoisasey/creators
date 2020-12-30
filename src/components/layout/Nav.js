import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
// wait until we are logged in to render Nav
import {isLoaded } from 'react-redux-firebase';
import {connect} from 'react-redux';


const Nav = (props) => {
		const {auth, profile} = props;

		const links = auth.uid ?  <SignedInLinks /> : null;

	return (
		<Fragment>
			<ul className="ui  menu">
				<li className="header item">
					<NavLink to="/">Home</NavLink>
				</li>

				<li className="item">
					<NavLink to="/create">Submit</NavLink>
				</li>

				<li className="item">
					<NavLink to="/report">Report A Bug</NavLink>
				</li>
				<li className="item">
					<NavLink to="/suggestion">Make a Suggestion</NavLink>
				</li>
				{auth.isLoaded && links}

			</ul>



		</Fragment>
	)
}

const mapStateToProps = (state) => {
	// console.log(state)
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default connect(mapStateToProps)(Nav);