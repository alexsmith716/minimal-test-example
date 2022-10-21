import React, { useEffect } from 'react';
import { fetchMe } from '../utils/fetchMe';

export default function TestPage() {

	useEffect(() => {
		fetchMe()
			.then((response) => {
				console.log('>>> response: ', response)
			})
			.catch((error) => {
				console.log('>>> error: ', error)
			})
	},);

	return <div>Test Page</div>
}
