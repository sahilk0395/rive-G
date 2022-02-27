import './App.scss';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ControlledCarousel from './Carousel';
import WorkInProgressPage from './WorkInProgressPage';
import Col from 'react-bootstrap/Col';
import FormControl from '@mui/material/FormControl';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Row from 'react-bootstrap/Row';
import MenuItem from '@mui/material/MenuItem';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import videoSample from './Resources/videoSample.mp4';
import popoverImage from './Resources/popoverImage.png';
import lunch from './Resources/lunch.png';
import Image_51 from './Resources/Image_51.png';
import mobileLogoText from './Resources/mobiletext.png';
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
import { navigations } from './components/NavigationBar/index';
import WelcomePage from './components/WelcomePage/index';
import ReservationPage from './components/ReservationPage/index';
import AboutUs from './components/AboutUs/index';
import MenuPage from './components/MenuPage/index';
import BookingPage from './components/BookingPage/index';
import ContactUs from './components/ContactUs/index';
import DishPage from './components/DishPage/index';
import createScrollSnap from 'scroll-snap';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
	const [value, setValue] = React.useState(new Date());

	const [open, setOpen] = React.useState(false);
	const [showMenu, setMenu] = React.useState('hide');
	const containerRef = React.createRef();
	const [activeTab, setActiveTab] = useState('home');

	useEffect(() => {
		bindScrollSnap();
	}, []);

	const handleClickOpen = () => {
		setOpen(true);
		setMenu(false);
	};

	const showMenuBar = () => {
		console.log('sss', showMenu);
		if (showMenu === 'hide') {
			setMenu('showBlock');
		} else {
			setMenu('hide');
		}
	};

	const handleClose = () => {
		setOpen(false);
		setMenu(true);
	};

	const blue = {
		500: '#222b13',
		600: '#C8B568',
		700: '#C8B568',
	};

	const CustomButtonRoot = styled('button')`
    font-family: Poppins, Medium;
    font-size: 0.875rem;
    background-color: ${blue[500]};
    padding: 12px 24px;
    border-radius: 29px;
    width: 180px;
    height: 58px
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    font: normal normal medium 24px/35px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
  
    &:hover {
      background-color: ${blue[600]};
    }
  
    &.${buttonUnstyledClasses.active} {
      background-color: ${blue[700]};
    }
  
    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

	function CustomButton(props) {
		return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
	}

	function bindScrollSnap() {
		console.log('bindScrollSnap');
		console.log('containerRef', containerRef);
		console.log('containerRef.current', containerRef?.current);
		const element = containerRef?.current;
		createScrollSnap(
			element,
			{
				snapDestinationX: '0%',
				snapDestinationY: '100%',
				timeout: 10,
				duration: 10,
			},
			() => {
				console.log('snapped');
				function isInViewport(element) {
					const rect = element?.getBoundingClientRect();
					console.log('rect', rect);
					if (rect == null || rect == undefined) return false;
					return rect?.top >= 0;
				}
				console.log('navigations', navigations);

				const pageVisibleInViewPort = navigations.find((obj) => isInViewport(document.getElementById(obj?.tabkey)));
				setActiveTab(pageVisibleInViewPort?.tabkey || '');
			}
		);
	}

	const tabClickHandler = (tab) => {
		setActiveTab(tab);
	};

	const mobileContent = () => {
		return (
			<>
				<div className="mobileCaption">
					<span className="logoColor font30 bold" style={{ fontFamily: 'Brigham, regular' }}>
						A Finesse Blend of Taste & Luxury
					</span>
				</div>
				<div className="mobileReserveButton">
					<Col xs={12} lg={1}>
						<CustomButton style={{ fontSize: '20px' }} onClick={handleClickOpen}>
							BOOK NOW
						</CustomButton>
						;
					</Col>
				</div>
				{/* {showMenu && (
				<>
					<button
						className="navbar-toggler toggler-example mobileNav mobileView"
						onClick={showMenuBar}
						aria-controls="navbarSupportedContent1"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="dark-blue-text">
							<i className="fas fa-bars fa-2x"></i>
						</span>
					</button>
					<div
						className="navbar-collapse mobileView"
						style={{ position: 'absolute', top: '60px', zIndex: '9999', width: '100%', color: '#4D602A' }}
						className={showMenu}
						id="navbarSupportedContent1"
					>
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active" style={{ background: '#958F76', width: '100%', left: '10px', position: 'relative' }}>
								<a className="nav-link" href="#" style={{ position: 'relative', left: '33px', textAlign: 'left' }}>
									HOME <span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item" style={{ background: '#A8A38D', width: '100%', left: '30px', position: 'relative' }}>
								<a style={{ position: 'relative', left: '33px', textAlign: 'left' }} className="nav-link poppinsFamily font14 semiBold" href="#">
									MENU
								</a>
							</li>
							<li className="nav-item" style={{ background: '#C1BBA2', width: '100%', left: '50px', position: 'relative' }}>
								<a style={{ position: 'relative', left: '33px', textAlign: 'left' }} className="nav-link poppinsFamily font14 semiBold" href="#">
									RESERVATIONS
								</a>
							</li>
							<li className="nav-item" style={{ background: '#D5CEB2', width: '100%', left: '70px', position: 'relative' }}>
								<a style={{ position: 'relative', left: '33px', textAlign: 'left' }} className="nav-link poppinsFamily font14 semiBold" href="#">
									AMBIENCE
								</a>
							</li>
							<li className="nav-item" style={{ background: '#DED9C2', width: '100%', left: '90px', position: 'relative' }}>
								<a style={{ position: 'relative', left: '33px', textAlign: 'left' }} className="nav-link poppinsFamily font14 semiBold" href="#">
									ABOUT US
								</a>
							</li>
							<li className="nav-item " style={{ background: '#EBE7D5', width: '100%', left: '100px', position: 'relative' }}>
								<a style={{ position: 'relative', left: '33px', textAlign: 'left' }} className="nav-link poppinsFamily font14 semiBold" href="#">
									CAREERS
								</a>
							</li>
							<li className="nav-item" style={{ background: '#F2F0E6', width: '100%', left: '120px', position: 'relative' }}>
								<a style={{ position: 'relative', left: '33px', textAlign: 'left' }} className="nav-link poppinsFamily font14 semiBold" href="#">
									CONTACT US
								</a>
							</li>
						</ul>
					</div>
				</>
			)} */}
			</>
		);
	};

	return (
		<div className="app-container" ref={containerRef}>
			{/* <WorkInProgressPage/> */}
			<Row id="home">
				<ControlledCarousel activeTab={activeTab} tabClickHandler={tabClickHandler} />
				<Row className="formRegister" style={{ alignItems: 'center', height: '10vh', justifyContent: 'space-around' }}>
					<Col xs={12} lg={1}>
						<FormControl fullWidth>
							<InputLabel size="small" id="demo-simple-select-label">
								No of people
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={1}
								size="small"
								label="No of people"
							>
								<MenuItem value={1}>1 Person</MenuItem>
								<MenuItem value={2}>2 Person</MenuItem>
								<MenuItem value={3}>3 Person</MenuItem>
								<MenuItem value={2}>4 Person</MenuItem>
								<MenuItem value={3}>5 Person</MenuItem>
								<MenuItem value={2}>6 Person</MenuItem>
								<MenuItem value={3}>7 Person</MenuItem>
								<MenuItem value={2}>8 Person</MenuItem>
								<MenuItem value={3}>9 Person</MenuItem>
								<MenuItem value={3}>10 Person</MenuItem>
								<MenuItem value={3}>11 Person</MenuItem>
								<MenuItem value={3}>12 Person</MenuItem>
							</Select>
						</FormControl>
					</Col>
					<Col xs={12} lg={3}>
						<LocalizationProvider dateAdapter={DateAdapter}>
							<DateTimePicker
								label="Select Time and Date"
								renderInput={(params) => <TextField size="small" {...params} />}
								value={value}
								onChange={(newValue) => {
									setValue(newValue);
								}}
							/>
						</LocalizationProvider>
					</Col>
					<Col xs={12} lg={3}>
						<TextField type="text" size="small" className="form-control" label="Enter Your Email Id" />
						<i
							className="fa fa-envelope icon"
							style={{ color: 'darkgray', position: 'absolute', top: '12px', right: '25px' }}
						></i>
					</Col>
					<Col xs={12} lg={2}>
						<TextField type="text" size="small" className="form-control" label="Enter Your Contact Number" />
						<i
							className="fa fa-phone icon"
							style={{ color: 'darkgray', position: 'absolute', top: '12px', right: '25px' }}
						></i>
					</Col>

					<Col xs={12} lg={2}>
						<CustomButton>BOOK NOW</CustomButton>;
					</Col>
				</Row>
			</Row>
			<WelcomePage />
			<ReservationPage />
			<AboutUs />
			<MenuPage />
			<DishPage />
			<BookingPage />
			<ContactUs />
			{mobileContent()}
			<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
				<AppBar sx={{ position: 'relative' }}>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
							sx={{
								position: 'absolute',
								right: 15,
								top: 17,
								color: 'gray',
								border: '1px solid grey',
							}}
						>
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							<img src={popoverImage} />
						</Typography>
					</Toolbar>
				</AppBar>
				<br></br>
				<div style={{ padding: '20px' }}>
					<p className="poppinsFamily heavyBold font24">Reserve Your Table</p>
					<span className="font14 poppinsFamily semiBold" style={{ color: '#1A1A1A', fontWeight: 400 }}>
						Please note that all reservations are for a full dining experience only. Tables for drinks however, are
						available on a walk-in basis. If you are unable find the time or date you require, please feel free to
						call us.
					</span>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<Row>
						<Col xs={12}>
							<TextField
								id="outlined-basic"
								className="form-control"
								size="small"
								label="Name"
								variant="outlined"
							/>
						</Col>
						<br></br>
						<br></br>
						<br></br>
						<Col xs={12}>
							<TextField
								id="outlined-basic"
								className="form-control"
								size="small"
								label="Last Name"
								variant="outlined"
							/>
						</Col>
						<br></br>
						<br></br>
						<br></br>
						<Col xs={6}>
							<FormControl fullWidth>
								<InputLabel size="small" id="demo-simple-select-label">
									No of people
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={1}
									size="small"
									label="No of people"
								>
									<MenuItem value={1}>1 Person</MenuItem>
									<MenuItem value={2}>2 Person</MenuItem>
									<MenuItem value={3}>3 Person</MenuItem>
									<MenuItem value={4}>4 Person</MenuItem>
									<MenuItem value={5}>5 Person</MenuItem>
									<MenuItem value={6}>6 Person</MenuItem>
									<MenuItem value={7}>7 Person</MenuItem>
									<MenuItem value={8}>8 Person</MenuItem>
									<MenuItem value={9}>9 Person</MenuItem>
									<MenuItem value={10}>10 Person</MenuItem>
									<MenuItem value={11}>11 Person</MenuItem>
									<MenuItem value={12}>12 Person</MenuItem>
								</Select>
							</FormControl>
						</Col>

						<br></br>
						<br></br>
						<br></br>
						<Col xs={12}>
							<LocalizationProvider dateAdapter={DateAdapter}>
								<DateTimePicker
									label="Select Time and Date"
									renderInput={(params) => <TextField size="small" {...params} />}
									value={value}
									onChange={(newValue) => {
										setValue(newValue);
									}}
								/>
							</LocalizationProvider>
						</Col>
						<br></br>
						<br></br>
						<br></br>
						<Col xs={12}>
							<TextField type="text" size="small" className="form-control" label="Enter Your Email Id" />
							<i
								className="fa fa-envelope icon"
								style={{ color: 'darkgray', position: 'absolute', top: '12px', right: '25px' }}
							></i>
						</Col>
						<br></br>
						<br></br>
						<br></br>
						<Col xs={12}>
							<TextField type="text" size="small" className="form-control" label="Enter Your Contact Number" />
							<i
								className="fa fa-phone icon"
								style={{ color: 'darkgray', position: 'absolute', top: '12px', right: '25px' }}
							></i>
						</Col>
						<br></br>
						<br></br>
						<br></br>
						<Col xs={12}>
							<CustomButton>BOOK NOW</CustomButton>;
						</Col>
					</Row>
				</div>

				<br></br>
			</Dialog>
		</div>
	);
}

export default App;
