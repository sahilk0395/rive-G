import React from 'react';
import './style.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavigationBar from '../NavigationBar/index';
import chefImage from '../../Resources/chefImage.png';

function AboutUs({ activeTab, tabClickHandler }) {
	return (
		<Row id="aboutus" style={{ backgroundImage: `url(${chefImage})`, opacity: '0.9', height: '100vh' }}>
			<Col xs={12} lg={6}>
				<Col xs={12} lg={3}>
					<NavigationBar activeTab={activeTab} tabClickHandler={tabClickHandler} defaultActiveKey={'aboutus'} />
				</Col>
			</Col>

			<Col xs={12} lg={5}>
				<p
					style={{
						fontFamily: 'Poppins, Regular',
						fontSize: '60px',
						fontWeight: '900',
						color: '#C8B568',
						textAlign: 'justify',
					}}
				>
					Our Celebrity Chef
				</p>
				<p
					style={{
						fontFamily: 'Poppins, Regular',
						fontSize: '40px',
						fontWeight: '900',
						textAlign: 'justify',
						color: '#FFFFFF',
					}}
				>
					Adipiscing elit, sed do
				</p>
				<p style={{ fontFamily: 'Poppins, Regular', fontSize: '14px', color: '#FFFCFC', textAlign: 'justify' }}>
					Sed ut ioperspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
					aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
					Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
					dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
					amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
					aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
					laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
					voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
					pariatur?
				</p>
			</Col>
		</Row>
	);
}

export default AboutUs;
