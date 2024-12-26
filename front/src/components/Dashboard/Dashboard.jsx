import React, { useEffect, useState } from 'react'
import { fetchUser } from '../../services/apiService'
import './Dashboard.scss'
import { toast } from 'react-toastify'

export default function Dashboard() {
	const [user, setUser] = useState(null)

	useEffect(() => {
		fetchUserOnload()
	}, [])

	const fetchUserOnload = async () => {
		try {
			const response = await fetchUser()
			setUser(response)
		} catch (error) {
			toast.error('Error fetching user')
		}
	}

	return (
		<div className='dashboard'>
			<h2>Welcome to your dashboard!</h2>

		</div>
	)
}
