import React, { useEffect, useState } from 'react';
import './style.scss';
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
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CustomButton from '../CustomButton/CustomButton';

function RegisterForm({}) {
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
		// setMenu(true);
	};

	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	});

	return (
		<Dialog fullScreen open={false} onClose={handleClose} TransitionComponent={Transition}>
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
					available on a walk-in basis. If you are unable find the time or date you require, please feel free to call
					us.
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
								// value={value}
								onChange={(newValue) => {
									// setValue(newValue);
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
	);
}
export default RegisterForm;
