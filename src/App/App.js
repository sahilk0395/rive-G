import './App.scss';
import React, { useEffect, useState } from 'react';
import { navigations } from '../components/NavigationBar/index';
import WelcomePage from '../components/WelcomePage/index';
import ReservationPage from '../components/ReservationPage/index';
import AboutUs from '../components/AboutUs/index';
import MenuPage from '../components/MenuPage/index';
import BookingPage from '../components/BookingPage/index';
import ContactUs from '../components/ContactUs/index';
import DishPage from '../components/DishPage/index';
import Home from '../components/Home/index';
import MobileApp from '../components/MobileApp/index';
import createScrollSnap from 'scroll-snap';

function App() {
	const containerRef = React.createRef();
	const [activeTab, setActiveTab] = useState('home');

	useEffect(() => {
		bindScrollSnap();
	}, []);

	function bindScrollSnap() {
		// console.log('bindScrollSnap');
		// console.log('containerRef', containerRef);
		// console.log('containerRef.current', containerRef?.current);
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
				// console.log('snapped');
				function isInViewport(element) {
					const rect = element?.getBoundingClientRect();
					// console.log('rect', rect);
					if (rect == null || rect == undefined) return false;
					return rect?.top >= 0;
				}
				// console.log('navigations', navigations);

				const pageVisibleInViewPort = navigations.find((obj) => isInViewport(document.getElementById(obj?.tabkey)));
				setActiveTab(pageVisibleInViewPort?.tabkey || '');
			}
		);
	}

	const tabClickHandler = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div className="app-container" ref={containerRef}>
			<div className="desktopView">
				<Home activeTab={activeTab} tabClickHandler={tabClickHandler} />
				<WelcomePage activeTab={activeTab} tabClickHandler={tabClickHandler} />
				<ReservationPage activeTab={activeTab} tabClickHandler={tabClickHandler} />
				<AboutUs activeTab={activeTab} tabClickHandler={tabClickHandler} />
				<MenuPage />
				<DishPage />
				<BookingPage />
				<ContactUs activeTab={activeTab} tabClickHandler={tabClickHandler} />
			</div>
			<MobileApp />
			{/* <div className="sticky">
				<span>THIS SITE IS UNDER CONSTRUCTION</span>
			</div> */}
		</div>
	);
}

export default App;
