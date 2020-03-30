import React, { useState, useEffect } from 'react'

import './App.css'
import 'remixicon/fonts/remixicon.css'

import Question from './types/Question'

function App() {

	const [solved, setSolved] = useState(false)
	const [option, setOption] = useState(0)

	if (!solved) {
		return (
			<div className='container'>
				<div className='sidebar__left'>
					<div className='restart'>
						<i className='ri-refresh-line'></i>
					</div>
					<div className='disabled'>
						<i className='ri-eye-off-line'></i>
					</div>
				</div>
				<div className='content'>
					<Question />
				</div>
			</div>
		)
	} else return null
}

export default App
