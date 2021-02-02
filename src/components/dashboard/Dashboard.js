import React, { Fragment, useState } from 'react'
import ProfileList from '../profiles/ProfileList';
import AdminList from '../admin/AdminList'
import {connect} from 'react-redux';
import { compose } from 'redux';
import {firestoreConnect} from 'react-redux-firebase';


const Dashboard =(props) => {
		const {profiles, auth, app, searchSpace, toRender} = props;
		// const [search, setSearch] = useState(null)

	// 	const filter =(e) => {
	// const {value} = e.target
	// 	setAppFilter(value)
	// }

	// 	if (profiles === undefined) {
	// 	return (
	// <div className="ui segment">
	// <div className="ui active centered inline loader"></div>
	// </div>
	// 	)
	// }

  // const searchSpace=(e)=>{
	// 	let keyword = e.target.value;	
	// 	// console.log(keyword)
	// 	setSearch(keyword)
  // }

	// 	let toRender = []
	// 	profiles.forEach((data)=>{
  //     if(search === null) {
	// 			 toRender.push(data)
	// 		}
	// 		else {
	// 			if(
	// 				data.field.toString().toLowerCase().includes(search.toString().toLowerCase()) || 
	// 				data.title.toString().toLowerCase().includes(search.toString().toLowerCase()) || 
	// 				data.genre.toString().toLowerCase().includes(search.toString().toLowerCase()) || 
	// 				data.name.toString().toLowerCase().includes(search.toString().toLowerCase())) {
	// 					toRender.push(data)
	// 			} 
	// 		} 
	// 	})
	const sorted = toRender.sort((a,b) => b.createdAt - a.createdAt)


		const mapped = sorted.map((card) =>{
			return (
				<ProfileList key={card.id} card={card} props={props} />
			)
		});


		const adminmap = sorted.map(card => {
			return (
				<AdminList key={card.id} card={card} />
			)
		})
		const users = auth.uid ? adminmap : mapped;


		return (
			<Fragment>
				{/* <div className="copy">
						<h4>Create. Connect. Flourish.</h4>
						<h4>For the community, by the community.</h4>
				</div> */}
				{/* <div className="ui search">
				 <input type="text" className="prompt"  placeholder="Search by Keyword" onChange={(e)=>searchSpace(e)} />
				</div> */}
				{/* <Filter filter={filter} /> */}
				<div className="ui link cards">
			{auth.isLoaded && users}
			</div>
			</Fragment>
		)
	}

const mapStateToProps = (state) => {
	return {
		profiles: state.firestore.ordered.profiles,
		auth: state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'profiles'}
	])
)(Dashboard)