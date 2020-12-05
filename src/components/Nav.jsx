import React, { useState } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

function Nav() {
	let isUser = JSON.parse(sessionStorage.getItem('isUser'));
	const [isLoggedin, setLog] = useState(() => isUser);
	let userData;
	if (sessionStorage.getItem('user') === null) {
		userData = JSON.parse(localStorage.getItem('user'));
	} else {
		userData = JSON.parse(sessionStorage.getItem('user'));
	}
	let storedName = userData.name;
	return (
		<nav>
			<div className="nav__left">
				<Link to="/">
					<a>
						<h2>Logo</h2>
					</a>
				</Link>

				<Link to="/">
					<a>Home</a>
				</Link>
				<Link to="/Services">
					<a>Services</a>
				</Link>
			</div>

			<Link to="/Services">
				<button
					style={{
						display: isLoggedin ? 'none' : '',
					}}
				>
					Login
				</button>
			</Link>
			<div
				style={{
					display: isLoggedin ? '' : 'none',
				}}
				className="loggedIn"
			>
				<div
					className="userName__right"
					style={{
						display: isLoggedin ? '' : 'none',
					}}
				>
					<div className="userName">
						<h4>
							Hello:{' '}
							<div className="dropdown">
								<span style={{ color: 'red' }}>{storedName}</span>
								<div class="dropdown-content">
									<Link to="/Profile">
										<p>Profile</p>
									</Link>

									<p
										onClick={() => {
											sessionStorage.setItem('isUser', false);
											window.location.reload(false);
										}}
									>
										sign out
									</p>
								</div>
							</div>
						</h4>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
