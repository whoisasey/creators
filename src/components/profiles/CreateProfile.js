import React, { Component, useState, useEffect, Fragment } from 'react';
import {connect} from 'react-redux';
// import Fields from './forms/Fields';
import {createProfile} from '../../store/actions/profileActions';
import {storage} from '../../config/config';
// import FileBase64 from 'react-file-base64';
import StepOne from './forms/StepOne';
import StepTwo from './forms/StepTwo'
import StepThree from './forms/StepThree'

// import {useHistory} from 'react-router-dom';

class CreateProfile extends Component {
	state = {
		currentStep: 1,
		name: "",
		email: "",
		field: [],
		genre: [],
		title: [],
		image: null,
		progress: 0,
		url: "",
		twitter: "",
		instagram: "",
		website: "",
		live: false,
	 } 
	

// const CreateProfile = ({createProfile}) => {
// 	const [field, setField] = useState([])
// 	const [genre, setgenre] = useState([])
// 	const [image, setImage] = useState(null)
// 	const [url, setUrl] = useState(null);
// 	const [progress, setProgress] = useState(0)
// 	const [inputs, setInputs] = useState({
// 		name: '',
// 		image: url ,
// 		field: [],
// 		twitter: '',
// 		instagram: '',
// 		genre: []
// 	})
	
	 handleChange =(e) => {
		const {name, value} = e.target
		this.setState({
			      [name]: value,
		})
	}




	handleChangeFields= (e) => {
		const {value} = e.target
		this.setState({
			field: this.state.field.concat(value),
		})
		console.log(this.state.field)
	}

	handleChangeGenre = (e) => {
		const {value} = e.target
		this.setState({
			genre: this.state.genre.concat(value)
		})
	}

	handleChangeTitle = (e) => {
		const {value} = e.target
		this.setState({
			title: this.state.title.concat(value)
		})
		console.log(this.state.title)
	}

	 handleChangeImage= (e) =>  {
		if (e.target.files[0]) {
				// setImage(e.target.files[0])
				this.setState({
					image: e.target.files[0]
				})
		}
	}

	handleImageSubmit = ()=> {

		const uploadImage = storage.ref(`/images/${this.state.image.name}`).put(this.state.image);
		uploadImage.on(
			"state_changed",
			snapshot => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				// setProgress(progress)
				this.setState({
					progress,
				})
			},
			err => {
				console.log(err)
			},
			() => {
				storage
				.ref("images")
				.child(this.state.image.name)
				.getDownloadURL()
				.then( (url) => {
					// setUrl(url)
					console.log(url)
					
					this.setState({
						image: url,
					})
				})
				.catch((err) => {
					console.log(err)
				})
			}
			)
		}


	 handleSubmit =(e)=>  {
			// let history = useHistory()
		e.preventDefault();
				console.log(this.state)
// console.log(this.state)
		this.props.createProfile(this.state) //this is passed to mapDispatchToProps as the project
		// history.push('/')
		this.props.history.push('/')
	}
	  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
	}
	
	  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
	}
	
	_reset = () => {
		this.setState({
			currentStep: 1,
			name: "",
			email: "",
			field: [],
			genre: [],
			title: [],
			image: null,
			progress: 0,
			url: "",
			twitter: "",
			instagram: "",
			website: "",
			live: false,
		})
	}

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="ui button" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="ui button" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}

resetButton(){
	return (
		<button className="ui button" onClick={this._reset}>Reset Form</button>
	)
}

	render() {
		return (
			<Fragment>
				<p>Step {this.state.currentStep}</p>
				<form onSubmit={this.handleSubmit} className="ui form">
					<StepOne 
					currentStep={this.state.currentStep} 
					handleChange={this.handleChange} 
					email={this.state.email} 
					name={this.state.name} 
					twitter={this.state.twitter} 
					instagram={this.state.instagram} 
					website={this.state.website} 
					handleImageSubmit={this.handleImageSubmit} 
					handleChangeImage={this.handleChangeImage}
					progress={this.state.progress}
					url={this.state.url} />
					<StepTwo 
          currentStep={this.state.currentStep} 
          handleChangeFields={this.handleChangeFields} 
        />
					<StepThree 
          currentStep={this.state.currentStep} 
          handleChangeGenre={this.handleChangeGenre}
          genre={this.state.genre} field={this.state.field} handleChangeTitle={this.handleChangeTitle} title={this.state.title}
        />
				{/* <StepFour currentStep={this.state.currentStep}/> */}
				{this.resetButton()}
        {this.previousButton()}
        {this.nextButton()}
				</form>
			</Fragment>
		)
	}
}

	 function mapDispatchToProps(dispatch) {
		//  console.log(dispatch)
		return {
			createProfile: (profile) => dispatch(createProfile(profile))
		}
	}


export default connect(null, mapDispatchToProps)(CreateProfile)
