import React from 'react';
import './style.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Image_51 from '../../Resources/Image_51.png';
import NavigationBar from '../NavigationBar/index';

function WelcomePage({ activeTab, tabClickHandler }) {
	return (
		<Row id="welcome" className="wel-container">
			<div style={{ width: '12%' }}>
				<Col xs={12} lg={4}>
					<NavigationBar activeTab={activeTab} tabClickHandler={tabClickHandler} />
				</Col>
			</div>
			<Col xs={12} lg={5}>
				<Carousel className="homePageCarousel" fade controls="false" style={{ height: 'calc(100vh - 100px)' }}>
					<Carousel.Item>
						<img className="d-block w-100" src={Image_51} style={{ height: 'calc(100vh - 290px)' }} alt="First slide" />
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={Image_51} style={{ height: 'calc(100vh - 290px)', width: '100vw' }} alt="Third slide" />
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={Image_51} style={{ height: 'calc(100vh - 290px)' }} alt="Third slide" />
					</Carousel.Item>
				</Carousel>
			</Col>
			<Col xs={12} lg={5}>
				<p style={{ fontFamily: 'Brigham, regular', fontSize: '50px', color: '#fff', textAlign: 'justify', color: '#B38519' }}>Welcome to Rive Gauche</p>
				<p style={{ fontFamily: 'Poppins, Regular', fontSize: '14px', color: '#fff', textAlign: 'justify', lineHeight: '33px' }}>
					Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
					officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
					illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
				</p>
			</Col>
		</Row>
	);
}

export default WelcomePage;
