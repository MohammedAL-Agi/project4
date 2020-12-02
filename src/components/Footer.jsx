import React from 'react';
import '../style.css';
function Footer() {
	return (
		<footer>
			<div className="footer__left">
				<div className="footer__logo">
					<h2>Logo</h2>
				</div>
				<div className="footer__description">
					<ul>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
					</ul>
				</div>
			</div>
			<div className="footer__mid">
				<ul>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
				</ul>
			</div>
			<div className="footer__right">
				<ul>
					<li>Home</li>
					<li>Services</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
