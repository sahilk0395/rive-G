import React from 'react';
import './style.scss';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import footerImage from '../../Resources/footerImage.png';
import TextField from '@mui/material/TextField';

function ContactUs({ activeTab, tabClickHandler }) {
	return (
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
	);
}

export default ContactUs;
