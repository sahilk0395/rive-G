import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './style.scss';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

function MenuTable({ rows }) {
	return (
		<TableContainer className="table">
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableBody>
					{rows.map((row, index) => (
						<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell scope="row">{row?.name}</TableCell>
							<TableCell align="right">{row?.calories}</TableCell>
							<TableCell align="right">{row?.fat}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default MenuTable;
