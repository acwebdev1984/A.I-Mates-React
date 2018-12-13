import React from 'react';

// we are creating a function, that allows aspects of the webpage become scrollable.
const Scroll = (props) => {

	return (
// JSX allows us to add CSS styles to the div (like HTML), but surrounded in 2xcurly
// once, we wrap an element with scroll (see CardList in app.js), these elements become the children and the styles are applied
		<div style={{ overflow: 'scroll', border: '2px solid white', height: '800px'}}>
		{props.children}
		</div>
		);
};


export default Scroll;