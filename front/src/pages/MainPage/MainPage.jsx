import React from 'react'
import { ToastContainer } from 'react-toastify';
import './MainPage.scss'
import Dashboard from '../../components/Dashboard/Dashboard';

export default function MainPage() {
	return (
		<div className='main-page'>
			<h1>Voyantis Home Assignment - Adar Abadian</h1>

			<Dashboard />
			{/* ToastContainer is a component from react-toastify that will display toast messages */}
			<ToastContainer />
		</div>
	)
}
