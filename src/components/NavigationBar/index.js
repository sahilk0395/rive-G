import React from 'react';
import './style.scss';
import Nav from 'react-bootstrap/Nav';

export const navigations = [
	{
		tabkey: 'home',
		displayName: 'HOME',
	},
	{
		tabkey: 'menu',
		displayName: 'Menu',
	},
	{
		tabkey: 'reservations',
		displayName: 'RESERVATIONS',
	},
	{
		tabkey: 'aboutus',
		displayName: 'ABOUT US',
	},
	{
		tabkey: 'career',
		displayName: 'CAREERS',
	},
	{
		tabkey: 'contactus',
		displayName: 'CONTACT US',
	},
];

function NavigationBar({ style, activeTab, tabClickHandler }) {
	return (
		<ul className={`flex-sm-column navigation`} style={style}>
			{navigations.map((item) => (
				<li className={activeTab === item?.tabkey ? 'activetab' : ''} key={item?.tabkey}>
					<a className="nostyle" href={`#${item?.tabkey}`} onClick={() => tabClickHandler(item?.tabkey)}>
						{item?.displayName}
					</a>
				</li>
			))}
		</ul>
	);
}

export default NavigationBar;
