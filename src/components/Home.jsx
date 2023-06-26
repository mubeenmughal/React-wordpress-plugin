import React from 'react'
import { Link } from 'react-router-dom';
import '../static/Home.css';


export const Home = () => {
	return (
		<div className="boilerplate-frontend">
			<div className="home-container">
				<h1>Welcome to the Home Component</h1>
				<div className="button-container">
					<Link to="/paypal" className="button">Paypal</Link>
					<Link to="/stripe" className="button">Stripe</Link>
					<Link to="/getpaypal" className="button">Get Paypal Link</Link>
					<Link to="/getstripe" className="button">Get Stripe Link</Link>
				</div>
			</div>
		</div>
	)
}
