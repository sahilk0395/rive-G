import React from 'react';
import './style.scss';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import footerBackground from '../../Resources/footerBackground.png';

function DishPage({ activeTab, tabClickHandler }) {
	return (
		<div className="contnr">
			<div className="headers">
				<div className="heading1">SIGNATURE DISHES BY OUR CELEBRITY CHEF</div>
				<div className="heading2">Adipiscing elit, sed do</div>
			</div>
			<div className="dish_container"></div>
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
