/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useContext, useEffect, useState } from 'react';

export default function LuminaryField(props) {
	const {quote} = props;
	const [inputValue, setInputValue] = useState('');
  
	return(
		<input 
			type='text' 
			value={inputValue} 
			onChange = {(e)=>{ 
				setInputValue(e.target.value);
				quote.luminaries[0].materials.films.push({inputValue});
			}} />
	);
}