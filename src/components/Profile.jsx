import React from 'react';
import '../styles/Profile.css';
import Register from './Regitster';

function Profile() {
	let isUser = JSON.parse(sessionStorage.getItem('isUser'));
	if (isUser) {
		return (
			<div className="profile__container">
				<h1>Profile</h1>
			</div>
		);
	} else return <Register />;
}

export default Profile;
