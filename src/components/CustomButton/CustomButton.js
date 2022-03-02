import React, { useEffect, useState } from 'react';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const blue = {
	500: '#222b13',
	600: '#C8B568',
	700: '#C8B568',
};

const CustomButtonRoot = styled('button')`
font-family: Poppins, Medium;
font-size: 0.875rem;
background-color: ${blue[500]};
padding: 12px 24px;
border-radius: 29px;
width: 180px;
height: 58px
color: white;
transition: all 150ms ease;
cursor: pointer;
border: none;
font: normal normal medium 24px/35px Poppins;
letter-spacing: 0px;
color: #FFFFFF;

&:hover {
  background-color: ${blue[600]};
}

&.${buttonUnstyledClasses.active} {
  background-color: ${blue[700]};
}

&.${buttonUnstyledClasses.focusVisible} {
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
  outline: none;
}

&.${buttonUnstyledClasses.disabled} {
  opacity: 0.5;
  cursor: not-allowed;
}
`;

export default function CustomButton(props) {
	return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}
