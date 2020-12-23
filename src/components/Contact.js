import React, { useState } from 'react';
import '../App.css';
import { db } from '../firebase';

export default function Contact() {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');

	const [ loader, setLoader ] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		//Here data in getting loaded into the database
		setLoader(true);

		//adding data into firebase
		db.collection('contacts')
			.add({
				name: name,
				email: email,
				message: message
			})
			.then(() => {
				setLoader(false);
				alert('Your message has been submitted ');
			})
			.catch((error) => {
				alert(error.message);
				setLoader(false);
			});

		//After submitted reset the form
		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h1>Contact Us</h1>

			<label>Name</label>
			<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />

			<label>Email</label>
			<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

			<label>Message</label>
			<textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />

			<button
				type="submit"
				style={{
					background: loader ? '#ccc' : 'rgb(2,2,110)'
				}}
			>
				Submit
			</button>
		</form>
	);
}
