import React, { useEffect, useState } from 'react';
import './style.scss';
import Image11 from '../../Resources/dishes/Image11.png';
import Image12 from '../../Resources/dishes/Image12.png';
import Image13 from '../../Resources/dishes/Image13.png';
import Image14 from '../../Resources/dishes/Image14.png';

function DishPage() {
	const data = [
		{
			title: 'Quis Autem',
			img: Image11,
		},
		{
			title: 'Sed Quia Non',
			img: Image12,
		},
		{
			title: 'Exercitationem',
			img: Image13,
		},
		{
			title: 'Reprehenderit Qui',
			img: Image14,
		},
		{
			title: 'Exercitationem',
			img: Image11,
		},
		{
			title: 'Exercitationem',
			img: Image11,
		},
	];
	const dishContainerRef = React.useRef();
	const [leftArrowVisible, setLeftArrowVisible] = React.useState(false);
	const [rightArrowVisible, setRightArrowVisible] = React.useState(true);

	useEffect(() => {
		dishContainerRef.current.addEventListener(
			'scroll',
			() => {
				const dishCards = document.getElementsByClassName('dish_card');
				if (dishCards[0].getBoundingClientRect()?.left >= 0) {
					setLeftArrowVisible(false);
				} else {
					setLeftArrowVisible(true);
				}
				console.log(dishCards[dishCards.length - 1].getBoundingClientRect());
				console.log(window.innerHeight);
				if (
					dishCards[dishCards.length - 1].getBoundingClientRect()?.right <=
					(window.innerWidth || document.documentElement.clientWidth)
				) {
					setRightArrowVisible(false);
				} else {
					setRightArrowVisible(true);
				}
			},
			{ passive: false }
		);
	}, []);
	// var myDiv = document.getElementById('myDiv');
	// myDiv.scrollTop = myDiv.scrollHeight;

	return (
		<div className="contnr">
			<div className="headers">
				<div className="heading1">SIGNATURE DISHES BY OUR CELEBRITY CHEF</div>
				<div className="heading2">Adipiscing elit, sed do</div>
			</div>
			<div className="dish_container">
				{leftArrowVisible && (
					<span className="arrowbtn arrowbtn-left" onClick={() => dishContainerRef.current.scrollBy(-484, 0)}></span>
				)}
				{rightArrowVisible && (
					<span className="arrowbtn arrowbtn-right" onClick={() => dishContainerRef.current.scrollBy(484, 0)}></span>
				)}
				<div className="dish_track" ref={dishContainerRef}>
					{data.map((obj, index) => (
						<div className="dish_card" key={index}>
							<div className="image_wrapper">
								<img src={obj?.img} />
							</div>
							<div className="title">
								{obj?.title}
								{index}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="footer">
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Sed ut perspiciatis unde omnis
					iste natus error sit voluptatem accusantium
				</p>
			</div>
		</div>
	);
}

{
	/* <Button style={{ fontFamily: 'Poppins, Regular', fontSize: '14px', color: '#FFFCFC', fontWeight: '900', border: '1px solid #FFFCFC' }} variant="outlined">
					Book Now
				</Button> */
}

export default DishPage;
