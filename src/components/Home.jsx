import React from 'react';
import '../styles/Home.css';

import Chalet from '../components/video/Chalet.mp4';
import Youtube from './Home_Page/Youtube';
function Home() {
	return (
		<div className="home__container">
			{/* Start header*/}
			<div className="header__video">
				<video autoPlay loop muted>
					<source src={Chalet} type="video/mp4" />
				</video>
				<div class="contentText">
					<h1>Welcome to JMOM</h1>
					<p>
						The best website to find the perfect place to spend your vacations
						on
						<br />
						JMOM forget your "HMOM" ; )
					</p>
				</div>{' '}
			</div>
			{/* End header*/}
			{/* ================= Our_services =========================================== */}

			<div className="Our_services">
				<h1>Our services</h1>

				<div className="profiles">
					<div className="profile">
						<img src="https://picsum.photos/200" className="services-img" />
						<h3 className="user-name-services">Abu Sameer Chalet </h3>
					</div>

					<div className="profile">
						<img src="https://picsum.photos/200" className="services-img" />
						<h3 className="user-name-services">Sabah Aleel Chalet</h3>
					</div>

					<div className="profile">
						<img src="https://picsum.photos/200" className="services-img" />
						<h3 className="user-name-services">Abo Ahmed Chalet</h3>
					</div>
				</div>
			</div>
			{/* ================= Our_services =========================================== */}
			<div className="testimoials">
				<h1 id="ref">Testimonials</h1>
			</div>
			<div id="card" className="container123">
				<section>
					<div className="content">
						<p>
							JMOM Website was superb, the staff were brilliant - polite,
							helpful and discrete, It was a fantastic holiday and I am sure we
							will be back.
						</p>
						<div className="author">
							<img src="https://picsum.photos/200" alt="" />
							<span>Rami Abu Al-Samen</span>
						</div>
					</div>
				</section>
				<section>
					<div className="content">
						<p>
							Before booking I was sceptical about the transport, but it worked
							faultlessly and we never had to wait.
						</p>
						<div className="author">
							<img src="https://picsum.photos/200" alt="" />
							<span>Mohammad Alshwaiki</span>
						</div>
					</div>
				</section>
				<section>
					<div className="content">
						<p>
							It would be remiss of me not to comment on the attention to detail
							/ excellent service provided by all of your staff, Thank you JMOM.
						</p>
						<div className="author">
							<img src="https://picsum.photos/200" alt="" />
							<span>Khadeejah Hammdan</span>
						</div>
					</div>
				</section>
			</div>
			{/* ============================================================ */}
			{/* Start Our Team */}

			<div className="Our_team">
				<div className="our_amazing_team">
					<h3>Our amazing team</h3>
				</div>

				<div className="profiles">
					<div className="profile buttom__profile">
						<img
							src="https://avatars1.githubusercontent.com/u/71769944?s=400&u=fd9f6f19861dbb2a0d1b72646faeb0b6386c7d70&v=4"
							className="profile-img"
						/>
						<h3 className="user-name">Mohammad</h3>
					</div>

					<div className="profile buttom__profile">
						<img
							src="https://avatars1.githubusercontent.com/u/67992414?s=400&u=c503c163561fb011dcfeac3d7b475735582b35c8&v=4"
							className="profile-img"
						/>
						<h3 className="user-name">Osama</h3>
					</div>

					<div className="profile buttom__profile">
						<img
							src="https://avatars0.githubusercontent.com/u/71584632?s=400&u=6c5c79bcc14ba57e4882f11ec9566661fff2fc08&v=4"
							className="profile-img"
						/>

						<h3 className="user-name">Mohammad Al-Agi</h3>
					</div>

					<div className="profile buttom__profile">
						<img
							src="https://avatars2.githubusercontent.com/u/71584331?s=400&u=59e7fe47593366524b5851eeb4a6e4cd4fba1799&v=4"
							className="profile-img"
						/>
						<h3 className="user-name">Jenan</h3>
					</div>
				</div>
			</div>
			{/* End Our Team */}
			{/* ============================================================ */}
			<Youtube />
		</div>
	);
}
export default Home;

// <div className="Out_team">
// 	<div className="card1">
// 		<img src="https://picsum.photos/200" alt="img" className="image"/>
// 		<div className="data">
// 			<p>Mohammad Alzoubi</p>
// 		</div>
// 	</div>
// 	<div className="card1">
// 		<img src="https://picsum.photos/200" alt="img" className="image"/>
// 		<div className="data">
// 			<p>Mohammad Alzoubi</p>
// 		</div>
// 	</div>
// 	<div className="card1">
// 		<img src="https://picsum.photos/200" alt="img" className="image"/>
// 		<div className="data">
// 			<p>Mohammad Alzoubi</p>
// 		</div>
// 	</div>
// 	<div className="card1">
// 		<img src="https://picsum.photos/200" alt="img" className="image"/>
// 		<div className="data">
// 			<p>Mohammad Alzoubi</p>
// 		</div>
// 	</div>
// </div>
