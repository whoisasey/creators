import React, { Fragment } from 'react'
import {NavLink} from 'react-router-dom'


export const Socials = ({instagram, twitter, email, bio, name, website}) => {
const igRender= () =>{
		if (!instagram) {
		return null
	}
	return (
		<a href={instagram}>
		<i className={`instagram icon`}></i>
		</a>
	)
}

const emailRender = () =>{
if (!email ) {
		return null
	}
	return (
				<a href={`mailto: ${email}`}>
		<i className={`paper plane icon`}></i>
		</a>
	)
}

const twitRender = () =>{
	if (!twitter) {
		return null
	}
	return (
		<a href={twitter}>
		<i className={`twitter icon`}></i>
		</a>
	)
}

const webRender = () => {
if (!website) {
	return null
}
return (
 <a href={website}>
	 <i className={`linkify icon`}></i>
 </a>
)
}

	return (
		<Fragment>
			<div className="socials">
		{/* <h4>Contact:</h4> */}
		
		{igRender()}
		{twitRender()}
		{emailRender()}
		{webRender()}
		</div>
		</Fragment>
	)
}

export const Info = ({ field, genre, title, filter, industry }) => {
	console.log(field.length)
	// console.log(industry.length)
	const fieldRender = () => {
		if (field !== 0) {	
			const fieldList = field.map(field => 
				<NavLink to="/search" key={field} >
		<li className="dark"  data-value={field} onClick={filter}>{field}</li>
	</NavLink>
		)
		return (
			<div className="segment">
		<h4>Fields of Work</h4> 
		<ul >{fieldList}</ul>
	</div>
	)
		}
		else {
			console.log(industry)
			const fieldList = industry.map(field => 
				<NavLink to="/search" key={field} >
		<li className="dark"  data-value={field} onClick={filter}>{field}</li>
	</NavLink>
		)
				return (
			<div className="segment">
		<h4>Fields of Work</h4> 
		<ul >{fieldList}</ul>
	</div>
	)	
	}
}
const titleRender = () => {

	if (title.length ===0) {
		return null
	}

	const titleList = title.map(title => 
		<NavLink to="/search" key={title}>
			<li className="light" data-value={title} onClick={ filter}>{title}</li>
		</NavLink>
		)
		
		return (
		<div className="segment">
			<h4>
				Expertise
			</h4>
			<ul >{titleList}</ul>
		</div>
		)
	}


	const genreRender = () => {
		const genreList = genre.map(title =>
			<NavLink to="/search" key={title}>
				<li className="light" data-value={ title} onClick={filter}>{title}</li>
			</NavLink>
		)
		if (genre.length === 0) {
			return null
		}

		return (
		<div className=" segment">
			<h4>Genres:</h4>
		{genreList}
		</div>
		)
}
return (
	<Fragment>
		{fieldRender()}
		{titleRender()}
		{genreRender()}


	</Fragment>
)
}


export const Bio =({bio}) => {
	const bioRender = ()=> {
		if (bio.length === 0) {
			return null
		}

		return (
		<div className={bio ? "bio" :null}>
			<h4>Bio:</h4>
			<p>{bio}</p>
		</div>
		)
}
	return (
		<div className={bio ? "segment" : null }>
			{bioRender()}
		</div>
	)
}

export const Pronoun = ({pronoun}) => {
	const render = () => {
		if (pronoun === undefined || pronoun.length === 0) {
			return null
		}

		return (
			<Fragment>
				{/* <h4>Pronouns</h4> */}
				<p>{pronoun}</p>
			</Fragment>
		)
	}
	return (
		<Fragment>
			{render()}
		</Fragment>
	)
}

export const Portfolio = ({workPhoto1, workPhoto2, workPhoto3, name}) => {
	return (
		<div className={workPhoto1 || workPhoto2 || workPhoto3 ? "work": null}>
			<img src={workPhoto1} alt={workPhoto1 ? `${name}'s Portfolio` : null} />
			<img src={workPhoto2} alt={workPhoto2 ? `${name}'s Portfolio` : null} />
			<img src={workPhoto3 } alt={workPhoto3 ? `${name}'s Portfolio` : null}/>
		</div>
	)
}