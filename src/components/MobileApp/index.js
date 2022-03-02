import React from 'react';
import './style.scss';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FormControl from '@mui/material/FormControl';
import Row from 'react-bootstrap/Row';
import MenuItem from '@mui/material/MenuItem';
import popoverImage from '../../Resources/popoverImage.png';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import InputLabel from '@mui/material/InputLabel';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import videoSample from '../../Resources/videoSample.mp4';
import RegisterForm from './RegisterForm';
import CustomButton from '../CustomButton/CustomButton';

function MobileApp({ activeTab, tabClickHandler }) {
	const [showMobileNav, setShowMobileNav] = React.useState(false);

	return (
		<div className="mobileView">
			<div className="layer1">
				<div className="heading">
					<button className="navbar-toggler mobileNav_button" onClick={() => setShowMobileNav(!showMobileNav)}>
						<i className="fas fa-bars"></i>
					</button>
					{showMobileNav && (
						<div
							className="navbar-collapse mobileView"
							style={{ position: 'absolute', top: '60px', zIndex: '9999', width: '100%', color: '#4D602A' }}
							className={showMobileNav}
							id="navbarSupportedContent1"
						>
							<ul className="navbar-nav mr-auto">
								<li
									className="nav-item active"
									style={{ background: '#958F76', width: '100%', left: '10px', position: 'relative' }}
								>
									<a
										className="nav-link"
										href="#"
										style={{ position: 'relative', left: '33px', textAlign: 'left' }}
									>
										HOME <span className="sr-only">(current)</span>
									</a>
								</li>
								<li
									className="nav-item"
									style={{ background: '#A8A38D', width: '100%', left: '30px', position: 'relative' }}
								>
									<a
										style={{ position: 'relative', left: '33px', textAlign: 'left' }}
										className="nav-link poppinsFamily font14 semiBold"
										href="#"
									>
										MENU
									</a>
								</li>
								<li
									className="nav-item"
									style={{ background: '#C1BBA2', width: '100%', left: '50px', position: 'relative' }}
								>
									<a
										style={{ position: 'relative', left: '33px', textAlign: 'left' }}
										className="nav-link poppinsFamily font14 semiBold"
										href="#"
									>
										RESERVATIONS
									</a>
								</li>
								<li
									className="nav-item"
									style={{ background: '#D5CEB2', width: '100%', left: '70px', position: 'relative' }}
								>
									<a
										style={{ position: 'relative', left: '33px', textAlign: 'left' }}
										className="nav-link poppinsFamily font14 semiBold"
										href="#"
									>
										AMBIENCE
									</a>
								</li>
								<li
									className="nav-item"
									style={{ background: '#DED9C2', width: '100%', left: '90px', position: 'relative' }}
								>
									<a
										style={{ position: 'relative', left: '33px', textAlign: 'left' }}
										className="nav-link poppinsFamily font14 semiBold"
										href="#"
									>
										ABOUT US
									</a>
								</li>
								<li
									className="nav-item "
									style={{ background: '#EBE7D5', width: '100%', left: '100px', position: 'relative' }}
								>
									<a
										style={{ position: 'relative', left: '33px', textAlign: 'left' }}
										className="nav-link poppinsFamily font14 semiBold"
										href="#"
									>
										CAREERS
									</a>
								</li>
								<li
									className="nav-item"
									style={{ background: '#F2F0E6', width: '100%', left: '120px', position: 'relative' }}
								>
									<a
										style={{ position: 'relative', left: '33px', textAlign: 'left' }}
										className="nav-link poppinsFamily font14 semiBold"
										href="#"
									>
										CONTACT US
									</a>
								</li>
							</ul>
						</div>
					)}
				</div>
				<div className="mobileCaption">
					<span className="logoColor font30 bold" style={{ fontFamily: 'Brigham, regular' }}>
						A Finesse Blend of Taste & Luxury
					</span>
				</div>
				<div className="mobileReserveButton">
					<Col xs={12} lg={1}>
						<CustomButton style={{ fontSize: '20px' }} onClick={() => {}}>
							BOOK NOW
						</CustomButton>
						;
					</Col>
				</div>
			</div>
			{/* <Carousel className="homePageCarousel">
				<Carousel.Item>
					<div id="slide1"></div>
				</Carousel.Item>
				<Carousel.Item>
					<video autoPlay muted>
						<source src={videoSample} type="video/mp4" style={{ height: '100%' }}></source>
						Sorry, your browser doesn't support videos.
					</video>
				</Carousel.Item>
				<Carousel.Item>
					<div id="slide3"></div>
				</Carousel.Item>
			</Carousel> */}
			<RegisterForm />
		</div>
	);
}

export default MobileApp;
