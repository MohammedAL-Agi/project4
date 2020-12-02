import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">
						<h2>Logo</h2>
					</Link>
				</li>
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/Services">
					<li>Services</li>
				</Link>
			</ul>
			<Link to="/Register">
				<button>Login</button>
			</Link>
		</nav>
	);
}

export default Nav;
