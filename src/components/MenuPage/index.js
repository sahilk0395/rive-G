import React from 'react';
import './style.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import lunchMenu from '../../Resources/lunchMenu.png';
import MenuTable from './MenuTable';

function MenuPage({ activeTab, tabClickHandler }) {
	const [expandedMeal, setExpandedMeal] = React.useState('lunch');

	const rows = [
		createData(
			'Coeur de saumon mariné façon «gravlax», blinis et tzatziki 80 Salmon, marinated in olive oil, fresh cream, cucumber, dill herbs, shioga beetroot ',
			'80'
		),
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

	function createData(name, calories, fat, carbs, protein) {
		return { name, calories, fat, carbs, protein };
	}
	function mealClickHandler(meal) {
		if (meal == expandedMeal) {
			setExpandedMeal('');
		} else {
			setExpandedMeal(meal);
		}
	}

	return (
		<Row id="menu" className="menu-container">
			<div className="wrapper">
				<div className="item" onClick={() => mealClickHandler('lunch')}>
					<span className="meal_heading">Lunch</span>
				</div>
				<div className={`info ${expandedMeal == 'lunch' ? 'show' : 'hide'}`}>
					<div className="image_wrapr">
						<img src={lunchMenu} alt="First slide" />
					</div>
					<div className="menu_wrapr">
						<div className="menu_header">Lunch Menu</div>
						<div className="table_wrap">
							<MenuTable rows={rows} />
						</div>
					</div>
				</div>
				<div className="item" onClick={() => mealClickHandler('dinner')}>
					<span className="meal_heading">Dinner</span>
				</div>
				<div className={`info ${expandedMeal == 'dinner' ? 'show' : 'hide'}`}>
					<div className="menu_wrapr">
						<div className="menu_header">Dinner Menu</div>
						<div className="table_wrap">
							<MenuTable rows={rows} />
						</div>
					</div>
				</div>
				<div className="item" onClick={() => mealClickHandler('alcohol')}>
					<span className="meal_heading">Alcohol</span>
				</div>
				<div className={`info ${expandedMeal == 'alcohol' ? 'show' : 'hide'}`}>
					<Row>
						<Col xs={12} lg={3} style={{ paddingRight: '0px' }}>
							<img src={lunchMenu} style={{ height: '100vh', width: '100%' }} alt="First slide" />
						</Col>
						<div className="menu_wrapr">
							<div className="menu_header">Dinner Menu</div>
							<div className="table_wrap">
								<MenuTable rows={rows} />
							</div>
						</div>
					</Row>
				</div>
			</div>
		</Row>
	);
}

export default MenuPage;
