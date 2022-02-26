import React from 'react';
import './style.scss';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import footerBackground from '../../Resources/footerBackground.png';

function BookingPage({ activeTab, tabClickHandler }) {
	return (
		<Row style={{ backgroundColor: '#000', backgroundImage: `url(${footerBackground})`, opacity: '0.9', height: 'calc(100vh)', display: 'flex', alignItems: 'end' }}>
			<div>
				<p style={{ fontSize: '26px', fontFamily: 'Poppins', color: '#B38519', fontWeight: 'Bold' }}>Live Events Keeps You On Your Toes</p>
				<p style={{ fontSize: '26px', fontFamily: 'Poppins', color: '#FBFBFB' }}>Call Reservation +0097150 567890 Or Email reservation@rivegaucheduabi.com</p>
				<Button style={{ fontFamily: 'Poppins, Regular', fontSize: '14px', color: '#FFFCFC', fontWeight: '900', border: '1px solid #FFFCFC' }} variant="outlined">
					Book Now
				</Button>
			</div>
		</Row>
	);
}

export default BookingPage;
