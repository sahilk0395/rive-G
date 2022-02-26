import React from 'react';
import './style.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import section1 from '../../Resources/section1.png';
import Button from 'react-bootstrap/Button';
import section2 from '../../Resources/section2.png';
import section3 from '../../Resources/section3.png';
import NavigationBar from '../NavigationBar/index';

function ReservationPage({ activeTab, tabClickHandler }) {
	return (
		<Row id="reservations" style={{ height: '100vh' }} className="desktopView">
			<Col xs={12} lg={4} style={{ backgroundImage: `url(${section1})`, opacity: '0.9', dislay: 'flex', alignItems: 'end' }}>
				<Col xs={12} lg={4}>
					<NavigationBar activeTab={activeTab} tabClickHandler={tabClickHandler} defaultActiveKey={'reservations'} />
				</Col>
				<div
					style={{
						left: '0px',
						width: '100%',
						height: '371px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'end',
						position: 'relative',
						top: '450px',
					}}
				>
					<p style={{ fontFamily: 'Poppins, Regular', fontWeight: '800', fontSize: '30px', color: '#AE8018' }}>RESTAURANT SHOWCASE</p>
					<p style={{ fontFamily: 'Poppins, Regular', fontSize: '18px', color: '#FFFCFC' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
					<Button style={{ fontFamily: 'Poppins, Regular', fontSize: '14px', color: '#FFFCFC', fontWeight: '900', border: '1px solid #FFFCFC' }} variant="outlined">
						View More
					</Button>
				</div>
			</Col>
			<Col xs={12} lg={4} style={{ backgroundImage: `url(${section2})`, dislay: 'flex', alignItems: 'end' }}>
				<div
					style={{
						left: '0px',
						top: '450px',
						position: 'relative',
						width: '100%',
						height: '371px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'end',
					}}
				>
					<p style={{ fontFamily: 'Poppins, Regular', fontWeight: '800', fontSize: '30px', color: '#AE8018' }}>AMBIENCE LOUNGE</p>
					<p style={{ fontFamily: 'Poppins, Regular', fontSize: '18px', color: '#FFFCFC' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
					<Button style={{ fontFamily: 'Poppins, Regular', fontSize: '14px', color: '#FFFCFC', border: '1px solid #FFFCFC', fontWeight: '900' }} variant="outlined">
						View More
					</Button>
				</div>
			</Col>
			<Col xs={12} lg={4} style={{ backgroundImage: `url(${section3})`, dislay: 'flex', alignItems: 'center' }}>
				<div
					style={{
						left: '0px',
						top: '450px',
						position: 'relative',
						width: '100%',
						height: '371px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'end',
					}}
				>
					<p style={{ fontFamily: 'Poppins, Regular', fontSize: '30px', fontWeight: '800', color: '#AE8018' }}>SUMMER GAREDEN</p>
					<p style={{ fontFamily: 'Poppins, Regular', fontSize: '18px', color: '#FFFCFC' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
					<Button style={{ fontFamily: 'Poppins, Regular', fontSize: '14px', fontWeight: '900', color: '#FFFCFC', border: '1px solid #FFFCFC' }} variant="outlined">
						View More
					</Button>
				</div>
			</Col>
		</Row>
	);
}

export default ReservationPage;
