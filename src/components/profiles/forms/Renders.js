import React, {Fragment} from 'react'
import { genres, dev, design, techdesign, techmark, techcon, filmprod, writing, photography} from './reusable/arrays'
import {add} from '../../helpers/helpers'

export const Genre = ({state, handleChangeGenre}) => {
	const { field } = state;
	const genre = []

	field.forEach(selected => {
		if (selected.includes("DJ") || selected.includes("Vocal Artist") || selected === "Music Producer") {
			add(genre, selected, genres, handleChangeGenre)
		} 
		else {
			return null
		}
	})
	return (
		<Fragment>
			{genre}
		</Fragment>
	)
}

export const Title = ({state, handleChangeTitle}) => {
	const {field} = state;
	const expertise = []
	const titles = []

		field.forEach(selected => {
			if (selected === "Web Development") {
				add(expertise, selected, dev, handleChangeTitle)
				}

			if (selected === "Graphic Design") {
			add(expertise, selected, design, handleChangeTitle)
		}

			if (selected === "Design") {
			add(expertise, selected, techdesign, handleChangeTitle)
		}

			if (selected === "Marketing") {
			add(expertise, selected, techmark, handleChangeTitle)

		}

			if (selected === "Content") {
			add(expertise, selected, techcon, handleChangeTitle)

		}

			if (selected === "Film Production") {
			add(expertise, selected, filmprod, handleChangeTitle)
		}

			if (selected === "Writing") {
			add(expertise, selected, writing, handleChangeTitle)
		}

			if (selected === "Photography") {
			add(expertise, selected, photography, handleChangeTitle)
		}

		else {
			return null
		}
			})

			return (
				<Fragment>
					{expertise}
					{titles}
				</Fragment>
			)
}