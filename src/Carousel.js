import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import videoSample from './Resources/videoSample.mp4';
import mobile5 from './Resources/mobile5.png';
import mobile6 from './Resources/mobile6.png';
import mobileD1 from './Resources/mobileD1.png';
import mobile9 from './Resources/mobile9.png';
import mobileLogo from './Resources/mobilelogo.png';
import { useState } from 'react';
import NavigationBar from './NavigationBar';

function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div class="carousel home" id="home">
			{/* <Carousel activeIndex={index} onSelect={handleSelect} className="homePageCarousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mobile6}
            style={{height:"100%"}}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <video autoPlay>
            <source src={videoSample} type="video/mp4" style={{height:"100%"}}></source>
            Sorry, your browser doesn't support videos.
        </video>
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mobile6}
            style={{height:"100%"}}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel> */}

			{/* <img src={mobile5} alt="Rive Gauche" style={{'width': '440px',
    'height': '109px','position': 'absolute','top': '70px','left': '52px'}}/> */}

			<NavigationBar
				defaultActiveKey={'home'}
				className="flex-sm-column carousel-navbar"
				style={{
					position: 'absolute',
					top: '239px',
					left: '42px',
					textAlign: 'left',
					zIndex: '9999',
					fontSize: '20px',
					fontFamily: 'Poppins, light',
				}}
			/>
			<Carousel className="homePageCarousel">
				<Carousel.Item>
					<div id="slide1"></div>
				</Carousel.Item>
				<Carousel.Item>
					<video autoPlay>
						<source src={videoSample} type="video/mp4" style={{ height: '100%' }}></source>
						Sorry, your browser doesn't support videos.
					</video>
				</Carousel.Item>
				<Carousel.Item>
					<div id="slide3"></div>
				</Carousel.Item>
			</Carousel>
			<div id="homelogo"></div>
		</div>
	);
}

export default ControlledCarousel;
