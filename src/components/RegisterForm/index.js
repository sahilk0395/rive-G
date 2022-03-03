import React from 'react';
import './style.scss';
import '../../App/App.scss';
import Col from 'react-bootstrap/Col';
import FormControl from '@mui/material/FormControl';
import Row from 'react-bootstrap/Row';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import InputLabel from '@mui/material/InputLabel';
import CustomButton from '../CustomButton/CustomButton';

function RegisterForm() {
	const [value, setValue] = React.useState(new Date());

	return (
		<Row
			className="formRegister"
			style={{
				alignItems: 'center',
				height: '10vh',
				justifyContent: 'space-around',
				background: '#fcfcfc',
				paddingLeft: '67px',
			}}
		>
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
			<Col xs={12} lg={3}>
				<TextField type="text" size="small" label="Enter Your Contact Number" className="form-control" />
				<i
					className="fa fa-phone icon"
					style={{ color: 'darkgray', position: 'absolute', top: '12px', right: '25px' }}
				></i>
			</Col>
			<Col xs={12} lg={2}>
				<CustomButton>BOOK NOW</CustomButton>;
			</Col>
		</Row>
	);
}

export default RegisterForm;
