import React from 'react';
import './style.scss';
import '../../App/App.scss';
import RegisterForm from '../RegisterForm/index';
import ControlledCarousel from '../Carousel/index';
import Row from 'react-bootstrap/Row';

function Home({ tabClickHandler, activeTab }) {
	return (
		<Row id="home">
			<ControlledCarousel activeTab={activeTab} tabClickHandler={tabClickHandler} />
			<RegisterForm />
		</Row>
	);
}

export default Home;
