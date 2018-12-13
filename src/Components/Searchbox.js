import React from 'react';

// Here we have created a searchbox function, that takes 2 arguments, searchfield & Search change, these are defined in app.js
// This then returns, the searchbox, with Tacyons styles an onchange feature, that enables "searchChange" that is again defined in app.js
export const Searchbox = ({searchfield, searchChange}) => {
return (
	<div className ='pa2'>
		<input
		className='pa3 ba b--green bg-lightest-blue'
		type= 'search'
		placeholder='Who are you looking for?'
		onChange={searchChange}
		/>
	</div>
	);

}

export default Searchbox;