import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Pages() {
	return (
		<Router>
			<Routes>
				<Route path='/home' element={<Home />} />
			</Routes>
		</Router>
	)
}

export default Pages
