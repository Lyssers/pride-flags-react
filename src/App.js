import PrideFlag from './PrideFlag';
import React, {useState} from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';






//Main Function
export default function App() {
	
	
	
	
	//Flag Cycling
	const [flagVariant, setFlagVariant] = useState('rainbow-original');
	function handleClick() {	
		switch (flagVariant){
			case 'rainbow-original':
				setFlagVariant('trans');
				break;
			case 'trans':
				setFlagVariant('bi');
				break;
			case 'bi': 
				setFlagVariant('les');
				break;
			case 'les':
				setFlagVariant('pan');
				break;
			case 'pan':
				setFlagVariant('rainbow');
				break;
			case 'rainbow':
				setFlagVariant('rainbow-original');
				break;
		}
	
	}
	
	//Wobbliness
	const [billow, setBillow] = useState(0.15);
	const handleChange = (event) => {
		//alert('You changed me!');
		setBillow(event.target.value);
	
	}
	
	//Hide
	const [checked, setChecked] = React.useState(true);
	const handleHide = (event) => {
		//alert('You changed me!');
		 setChecked((prev) => !prev);
	}
	
	return (
		<div className="wrapper">
		
		
		
		{/* Slide animation and Paper */}
		
			<Slide direction="up" in={checked}>
			<Paper elevation = {10} sx={{display: 'flex', flexWrap: 'wrap', placeContent: 'center'}}>
				<Box margin = {2}>
					
					{/* Pride Flag */}
		
					<PrideFlag variant = {flagVariant}
						width = {200}
						numOfColumns = {20}
						staggeredDelay = {50}
						billow = {billow} 
					/>
					
					{/* Box for Controls*/}
					
					<Box mt={2}>
					
					{/* Arrange Controls horizontally*/}
					
						<Stack
							direction="row"
							spacing={2}
							alignItems="center">
		
							<Button size="small" onClick={handleClick} variant="contained"> 
								Cycle Flags
							</Button>
							<Slider valueLabelDisplay="auto" defaultValue={0.10} step = {0.10} min = {0.10} max = {2.00} aria-label="Flag Waviness" onChange={handleChange} />

							
						</Stack>
					</Box>
				</Box>
			</Paper>
			</Slide>
			
		<Box sx={{display: 'flex', flexWrap: 'wrap', placeContent: 'end center'}}>
			<FormControlLabel
					control={<Switch onChange={handleHide} defaultChecked/>}
					label="Show"
			/>
		</Box>
		</div>
	
	);
}
  