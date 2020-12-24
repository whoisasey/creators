import React, {Fragment} from 'react'
import Fields from '../forms/Fields'

function StepOne(props) {
	// console.log(props)
	const {name, email, handleChange, currentStep, twitter, instagram, website} = props;
	// console.log(name, email)
	if (currentStep !== 1) {
		return null
	}
	return (
    <Fragment> 
			<h2>Let's get to know you!</h2>
			<h3>Basic Info</h3>
 			<Fields label="Your preferred name" type="text" id="name" name="name" value={name}onChange={handleChange} placeholder="Your preferred name"/>

			 <Fields label="Your preferred contact email" type="text" id="email" name="email" onChange={handleChange} value={email} placeholder="Enter email"/>
					<h3>Social Media</h3>
		<Fields label="Twitter" type="text" id="twitter" name="twitter" value={twitter}onChange={handleChange} placeholder="https://www.twitter.com/*"/>

		<Fields label="Instagram" type="text" id="instagram" name="instagram" onChange={handleChange} value={instagram} placeholder="https://www.instagram/com/*"/>

		<Fields label="Website" type="text" id="website" name="website" onChange={handleChange} value={website} placeholder="https://*"/>

      {/* <label htmlFor="Your preferred contact email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={handleChange}
        /> */}
    </Fragment>	)
}

export default StepOne