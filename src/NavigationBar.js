import './App.css';
import React from 'react';
import Nav from 'react-bootstrap/Nav';

function NavigationBar({ classNames, style, defaultActiveKey = '' }) {
	React.useEffect(() => {
		console.log('rendered with : ' + defaultActiveKey);
		return () => {
			console.log('rendered out : ' + defaultActiveKey);
		};
	});
	return (
		<Nav
			className={`flex-sm-column ${classNames}`}
			style={
				({
					position: 'absolute',
					left: '42px',
					textAlign: 'left',
					fontSize: '20px',
					fontFamily: 'Poppins, light',
				},
				style)
			}
		>
			<Nav.Link href="#home" eventKey="home" style={{ borderBottom: '1px dashed #C8B568', fontSize: '20px', paddingBottom: '2px', color: '#C8B568', fontFamily: 'Poppins, light' }}>
				HOME
			</Nav.Link>
			<Nav.Link href="#menu" eventKey="menu" style={{ fontSize: '20px', borderBottom: '1px dashed #C8B568', paddingBottom: '2px', color: '#C8B568', fontFamily: 'Poppins, light' }}>
				MENU
			</Nav.Link>
			<Nav.Link
				href="#reservations"
				eventKey="reservations"
				style={{ fontSize: '20px', borderBottom: '1px dashed #C8B568', paddingBottom: '2px', color: '#C8B568', fontFamily: 'Poppins, light' }}
			>
				RESERVATIONS
			</Nav.Link>
			<Nav.Link href="#aboutus" eventKey="aboutus" style={{ fontSize: '20px', borderBottom: '1px dashed #C8B568', paddingBottom: '2px', color: '#C8B568', fontFamily: 'Poppins, light' }}>
				ABOUT US
			</Nav.Link>
			<Nav.Link href="#career" eventKey="career" style={{ fontSize: '20px', borderBottom: '1px dashed #C8B568', paddingBottom: '2px', color: '#C8B568', fontFamily: 'Poppins, light' }}>
				CAREERS
			</Nav.Link>
			<Nav.Link href="#contactus" eventKey="contactus" style={{ fontSize: '20px', borderBottom: '1px dashed #C8B568', paddingBottom: '2px', color: '#C8B568', fontFamily: 'Poppins, light' }}>
				CONTACT US
			</Nav.Link>
		</Nav>
	);
}

export default NavigationBar;
