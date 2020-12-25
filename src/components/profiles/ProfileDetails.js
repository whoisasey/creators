import React, {Fragment} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import { Socials} from '../admin/Buttons';
import Remove from '../admin/auth/Remove';

const ProfileDetails = (props) => {
	const {profile, auth, history} = props;
	const {instagram, name, photo, email, twitter, website, bio} = props.profile;

const buttons = auth.uid ? <Remove props={props}/> : <Socials instagram={instagram} twitter={twitter} email={email} bio={bio} name={name} website={website}/>;


const goBack = ()=> {
	history.push('/')
}

if (profile) {
		return (
			<Fragment>
			<h1>{name}</h1>
				<div className="details">
			<div className="image">
			<img src={photo} alt={name} />
			</div>


			<div className="details-content">

			{buttons}
			</div>
			</div>
			<button className="ui button" onClick={() =>goBack()}>Go Back</button>
			</Fragment>
		)
	} else {
		return (
			<div className="container center">
				<p>Loading ...</p>
			</div>
			)
		}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const profiles = state.firestore.data.profiles;
	const profile = profiles ? profiles[id] : null;
	return {
		profile,
		auth: state.firebase.auth,
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'profiles'}
	])
)(ProfileDetails)