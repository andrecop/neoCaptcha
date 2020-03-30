import React from 'react'

export default (): JSX.Element => {
	return (
		<>
			<h2>Select an African country</h2>
			<div className='question__options'>
				<p>
					<input type='radio' id='option1' name='radio-group' />
					<label htmlFor='option1'>America</label>
				</p>
				<p>
					<input type='radio' id='option2' name='radio-group'/>
					<label htmlFor='option2'>Nigeria</label>
				</p>
				<p>
					<input type='radio' id='option3' name='radio-group' />
					<label htmlFor='option3'>India</label>
				</p>
				<p>
					<input type='radio' id='option4' name='radio-group' />
					<label htmlFor='option4'>Sweden</label>
				</p>
			</div>
		</>
	)
}