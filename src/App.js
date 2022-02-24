import './App.css';
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
import section1 from './Resources/section1.png';
import section2 from './Resources/section2.png';
import section3 from './Resources/section3.png';
import popoverImage from './Resources/popoverImage.png';
import chefImage from './Resources/chefImage.png';
import lunch from './Resources/lunch.png';
import Image_51 from './Resources/Image_51.png';
import footerImage from './Resources/footerImage.png';
import mobileLogoText from './Resources/mobiletext.png';
import footerBackground from './Resources/footerBackground.png';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import InputLabel from '@mui/material/InputLabel';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import NavigationBar from './NavigationBar';
import createScrollSnap from 'scroll-snap';

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
	const [value, setValue] = React.useState(new Date());
	const [collapsed, setCollapsed] = React.useState('show');
	const [dinnerCollapsed, setDinnerCollapsed] = React.useState('hide');
	const [alcoholCollapsed, setAlcoholCollapsed] = React.useState('hide');
	const [open, setOpen] = React.useState(false);
	const [showMenu, setMenu] = React.useState('hide');
	const containerRef = React.createRef();
	const [activeTab, setActiveTab] = useState('home');

	useEffect(() => {
		bindScrollSnap();
	}, [containerRef]);

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
	const rows = [
		createData('Coeur de saumon mariné façon «gravlax», blinis et tzatziki 80 Salmon, marinated in olive oil, fresh cream, cucumber, dill herbs, shioga beetroot ', '80'),
		createData('Foie-gras de canard mi-cuit aux épices, pommes, pain brioche ', '135'),
		createData('Asperges vertes king size oeuf poché 100 Large asparagu', '100'),
		createData('Carpaccio d’artichauts(Artichoke, parmesan, olive oil, lemon, araguna )', '80'),
		createData('Tartare de thon rouge(Tuna tartare, avocado, mango, red onions, chive)', '130'),
		createData('Pizza Truffe 130 Truffle, parmesan, fresh cream, truffle oil, araguna', '130'),
		createData('Tatin de Tomates 100 confits tomatoes, Parmesan, truffle fresh cream)', '130'),
		createData('Risotto aux morilles et parmesan 100 Risotto rice, morilles cream)', '100'),
		createData('Linguines au homard 180  Risotto ( Linguinis, lobster cream, lobster poched, shiso beetroot)', '100'),
	];

	const alcoholRows = [
		createData('BELVEDERE PURE ,750 ML', '2200'),
		createData('GREY GOOSE 750 ML', '2200'),
		createData('MONKEY 47 500 ML', '2100'),
		createData('TANQUERAY NO.10 750 ML', '2100'),
		createData('RON ZACAPA 23YO 750 ML', '3200'),
		createData('DON JULIO 1942 750 ML ', '4500'),
		createData('DON JULIO BLANCO 750 ML	', '8500'),
		createData('RON ZACAPA 23YO 750 ML', '2600'),
		createData('CHIVAS REGAL 18 YEAR OLD 750 ML	', '4200'),
		createData('CHIVAS ROYAL SALUTE 21 700 ML	L', '7300'),
	];
	function divclicked(item) {
		if (item === 'lunch') {
			if (collapsed === 'hide') {
				setCollapsed('show');
				setDinnerCollapsed('hide');
				setAlcoholCollapsed('hide');
			} else {
				setCollapsed('hide');
			}
		}
		if (item === 'alcohol') {
			if (alcoholCollapsed === 'hide') {
				setAlcoholCollapsed('show');
				setCollapsed('hide');
				setDinnerCollapsed('hide');
			} else {
				setCollapsed('hide');
			}
		}
		if (item === 'dinner') {
			if (dinnerCollapsed === 'hide') {
				setDinnerCollapsed('show');
				setCollapsed('hide');
				setAlcoholCollapsed('hide');
			} else {
				setDinnerCollapsed('hide');
			}
		}
	}
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
		const element = containerRef.current;
		createScrollSnap(
			element,
			{
				snapDestinationX: '0%',
				snapDestinationY: '90%',
				timeout: 100,
				duration: 300,
				threshold: 0.2,
				snapStop: false,
			},
			() => console.log('snapped')
		);
	}

	const scollHandler = (tab) => {};

	const tabClickHandler = (tab) => {
		setActiveTab(tab);
		// scollHandler(tab);
	};
	return (
		<div className="App Rive" ref={containerRef}>
			{/* <WorkInProgressPage/> */}
			<ControlledCarousel activeTab={activeTab} tabClickHandler={tabClickHandler} />
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

			<Row className="formRegister" style={{ alignItems: 'center', height: '10vh', justifyContent: 'space-around' }}>
				<Col xs={12} lg={1}>
					<FormControl fullWidth>
						<InputLabel size="small" id="demo-simple-select-label">
							No of people
						</InputLabel>
						<Select labelId="demo-simple-select-label" id="demo-simple-select" value={1} size="small" label="No of people">
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
					<i className="fa fa-envelope icon" style={{ color: 'darkgray', position: 'absolute', top: '12px', right: '25px' }}></i>
				</Col>
				<Col xs={12} lg={2}>
					<TextField type="text" size="small" className="form-control" label="Enter Your Contact Number" />
					<i className="fa fa-phone icon" style={{ color: 'darkgray', position: 'absolute', top: '12px', right: '25px' }}></i>
				</Col>

				<Col xs={12} lg={2}>
					<CustomButton>BOOK NOW</CustomButton>;
				</Col>
			</Row>
			<Row id="menu" style={{ background: '#000', paddingTop: '125px' }} className="formRegister">
				<div style={{ width: '12%' }}>
					<Col xs={12} lg={4}>
						<NavigationBar activeTab={activeTab} tabClickHandler={tabClickHandler} scollHandler={scollHandler} />
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
						Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
						in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
						eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
						sed quia.
					</p>
				</Col>
			</Row>
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
			<Row id="aboutus" style={{ backgroundImage: `url(${chefImage})`, opacity: '0.9', height: '100vh' }} className="desktopView">
				<Col xs={12} lg={6}>
					<Col xs={12} lg={3}>
						<NavigationBar activeTab={activeTab} tabClickHandler={tabClickHandler} defaultActiveKey={'aboutus'} />
					</Col>
				</Col>

				<Col xs={12} lg={6}>
					<p style={{ fontFamily: 'Poppins, Regular', fontSize: '60px', fontWeight: '900', color: '#C8B568', textAlign: 'justify' }}>Our Celebrity Chef</p>
					<p style={{ fontFamily: 'Poppins, Regular', fontSize: '40px', fontWeight: '900', textAlign: 'justify', color: '#FFFFFF' }}>Adipiscing elit, sed do</p>
					<p style={{ fontFamily: 'Poppins, Regular', fontSize: '18px', color: '#FFFCFC', textAlign: 'justify' }}>
						Sed ut ioperspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
						architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
						labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
						consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
						pariatur?
					</p>
				</Col>
			</Row>
			<Row id="page-5" className="desktopView">
				<section style={{ display: 'flex', paddingRight: 0, paddingLeft: 0, height: 'calc(100vh - 20px)' }}>
					<div className="item" onClick={() => divclicked('lunch')}>
						<span style={{ position: 'absolute', background: 'none', transformOrigin: '0 0', transform: 'rotate(269deg)' }}>Lunch</span>
					</div>
					<div className="info lunch" className={collapsed}>
						<Row>
							<Col xs={12} lg={3} style={{ paddingRight: '0px' }}>
								<img className="d-block w-100" src={Image_51} style={{ height: '100vh' }} alt="First slide" />
							</Col>
							<Col xs={12} lg={9} style={{ paddingLeft: '0px' }}>
								<TableContainer component={Paper}>
									<Table sx={{ minWidth: 650 }} aria-label="simple table">
										<TableHead></TableHead>
										<TableBody>
											{rows.map((row, index) => (
												<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
													<TableCell component="th" scope="row">
														{row.name}
													</TableCell>
													<TableCell align="right">{row.calories}</TableCell>
													<TableCell align="right">{row.fat}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</Col>
						</Row>
					</div>
					<div className="item" onClick={() => divclicked('dinner')}>
						<span style={{ position: 'absolute', background: 'none', transformOrigin: '0 0', transform: 'rotate(269deg)' }}>Dinner</span>
					</div>
					<div className="info dinner" className={dinnerCollapsed}>
						<Col xs={12} lg={12} style={{ paddingLeft: '0px' }}>
							<TableContainer component={Paper}>
								<Table sx={{ minWidth: 650 }} aria-label="simple table">
									<TableHead></TableHead>
									<TableBody>
										{rows.map((row, index) => (
											<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
												<TableCell component="th" scope="row">
													{row.name}
												</TableCell>
												<TableCell align="right">{row.calories}</TableCell>
												<TableCell align="right">{row.fat}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Col>
					</div>
					<div className="item" onClick={() => divclicked('alcohol')}>
						<span style={{ position: 'absolute', background: 'none', transformOrigin: '0 0', transform: 'rotate(269deg)' }}>Alcohol</span>
					</div>
					<div className="info alcohol" className={alcoholCollapsed}>
						<Row>
							<Col xs={12} lg={3} style={{ paddingRight: '0px' }}>
								<img className="d-block w-100" src={Image_51} style={{ height: '100vh' }} alt="First slide" />
							</Col>
							<Col xs={12} lg={9} style={{ paddingLeft: '0px' }}>
								<TableContainer component={Paper}>
									<Table sx={{ minWidth: 650 }} aria-label="simple table">
										<TableHead></TableHead>
										<TableBody>
											{alcoholRows.map((row, index) => (
												<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
													<TableCell component="th" scope="row">
														{row.name}
													</TableCell>
													<TableCell align="right">{row.calories}</TableCell>
													<TableCell align="right">{row.fat}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</Col>
						</Row>
					</div>
				</section>
			</Row>
			<Row style={{ backgroundColor: '#000', backgroundImage: `url(${footerBackground})`, opacity: '0.9', height: 'calc(100vh)', display: 'flex', alignItems: 'end' }}>
				<div>
					<p style={{ fontSize: '26px', fontFamily: 'Poppins', color: '#B38519', fontWeight: 'Bold' }}>Live Events Keeps You On Your Toes</p>
					<p style={{ fontSize: '26px', fontFamily: 'Poppins', color: '#FBFBFB' }}>Call Reservation +0097150 567890 Or Email reservation@rivegaucheduabi.com</p>
					<Button style={{ fontFamily: 'Poppins, Regular', fontSize: '14px', color: '#FFFCFC', fontWeight: '900', border: '1px solid #FFFCFC' }} variant="outlined">
						Book Now
					</Button>
				</div>
			</Row>
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
						Please note that all reservations are for a full dining experience only. Tables for drinks however, are available on a walk-in basis. If you are unable find the time or date
						you require, please feel free to call us.
					</span>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<Row>
						<Col xs={12}>
							<TextField id="outlined-basic" className="form-control" size="small" label="Name" variant="outlined" />
						</Col>
						<br></br>
						<br></br>
						<br></br>
						<Col xs={12}>
							<TextField id="outlined-basic" className="form-control" size="small" label="Last Name" variant="outlined" />
						</Col>
						<br></br>
						<br></br>
						<br></br>
						<Col xs={6}>
							<FormControl fullWidth>
								<InputLabel size="small" id="demo-simple-select-label">
									No of people
								</InputLabel>
								<Select labelId="demo-simple-select-label" id="demo-simple-select" value={1} size="small" label="No of people">
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
							<i className="fa fa-envelope icon" style={{ color: 'darkgray', position: 'absolute', top: '12px', right: '25px' }}></i>
						</Col>
						<br></br>
						<br></br>
						<br></br>
						<Col xs={12}>
							<TextField type="text" size="small" className="form-control" label="Enter Your Contact Number" />
							<i className="fa fa-phone icon" style={{ color: 'darkgray', position: 'absolute', top: '12px', right: '25px' }}></i>
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
			<Row style={{ backgroundColor: '#000', opacity: '0.9', height: '522px' }}>
				<footer style={{ backgroundColor: '#000', backgroundImage: `url(${footerImage})` }}>
					<div className="container-fluid text-center text-md-left">
						<br></br>
						<div className="row">
							<div className="col-md-2 mb-md-0 mb-2 sideDashedBorder">
								<h5 className="text-uppercase logoColor poppingFamily font14 semiBold">EXPERIENCE</h5>

								<ul className="list-unstyled font12">
									<li>
										<a className="whiteColor poppingFamily" href="#!">
											Menu
										</a>
									</li>
									<li>
										<a href="#!" className="whiteColor poppingFamily">
											Reservations
										</a>
									</li>
									<li>
										<a href="#!" className="whiteColor poppingFamily">
											Ambience
										</a>
									</li>
									<li>
										<a href="#!" className="whiteColor poppingFamily">
											Events
										</a>
									</li>
								</ul>
							</div>

							<div className="col-md-2 mb-md-0 mb-2 sideDashedBorder">
								<h5 className="text-uppercase logoColor poppingFamily font14 semiBold">KNOW US</h5>

								<ul className="list-unstyled font12 poppingFamily">
									<li>
										<a href="#!" className="whiteColor">
											About us
										</a>
									</li>
								</ul>
							</div>
							<div className="col-md-2 mb-md-0 mb-2 sideDashedBorder">
								<h5 className="text-uppercase logoColor poppingFamily font14 semiBold">WORK WITH US</h5>

								<ul className="list-unstyled font12">
									<li>
										<a href="#!" className="whiteColor poppingFamily">
											Careers
										</a>
									</li>
								</ul>
							</div>
							<div className="col-md-2 mb-md-0 mb-2">
								<h5 className="text-uppercase logoColor poppingFamily font14 semiBold">GET IN TOUCH</h5>

								<ul className="list-unstyled">
									<li>
										<a href="#!" className="font12 poppingFamily whiteColor">
											Contact Us
										</a>
									</li>
								</ul>
							</div>
							<div className="col-md-4 mb-md-0 mb-4 text-md-left">
								<div className="row">
									<div className="col-md-8 mt-md-0 mt-6 logoColor bold font20 poppinFamily">Stay Connected</div>
									<br></br>
									<br></br>
									<br></br>
									<div className="col-md-8 mt-md-0 mt-6 font20 poppinFamily">
										<span className="poppinFamily" style={{ color: 'white' }}>
											Subscribe News Letter
										</span>
										<br></br>
										<br></br>
										<div>
											<TextField type="text" size="small" className="form-control" label="Enter Your Email Id" />
											<br></br>
											<br></br>
											<Button
												style={{
													fontFamily: 'Poppins, Regular',
													fontSize: '18px',
													color: '#FFFCFC',
													fontWeight: '900',
													border: '1px solid #FFFCFC',
													padding: '10px 17px',
													float: 'right',
												}}
												size="small"
												variant="outlined"
											>
												SUBSCRIBE
											</Button>
										</div>
									</div>
								</div>
							</div>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
							<div className="col-md-4 mb-md-0 mb-4">
								<h5 className="text-uppercase logoColor poppinsFamily font24 semiBold">For Reservations call</h5>

								<h5 style={{ color: 'white' }} className="text-uppercase poppinsFamily font40 semiBold">
									0432637260 / 0521931223
								</h5>
							</div>
						</div>
					</div>

					<div className="footer-copyright text-center py-3 logoColor font12">
						© Copyright Rive Gauche 2021 -22:
						<a href="www.rivegauchedubai.com" className="font12 logoColor poppingFamily">
							{' '}
							Designed by Elan Vital
						</a>
					</div>
				</footer>
			</Row>
		</div>
	);
}

export default App;
