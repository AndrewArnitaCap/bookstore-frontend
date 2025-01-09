import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Books from './pages/Books';

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
		<Routes>
				<Route path="/books" element={<Books />} />
		</Routes>
	</BrowserRouter>
    </>
  )
}

export default App
