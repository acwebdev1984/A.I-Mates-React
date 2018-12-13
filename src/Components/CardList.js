
// imporing all the files and variables required
import React from 'react';
import {Friends} from './friends';
import Card from './card';
import App from '../Containers/App';
// creating an exportable function that loops through the friends array using .map(), looking at the user and index
// and returns the id, username name and email.
export const CardList = ({Friends}) => {
	return (
		
		<div>
		{
		Friends.map((user, i) => {
		// adding the key prop below, is added so that if items from the array are removed or changed
		// this will not impact the loop. The key prop should be something that is unique to the array items. 
		return (
					<Card 
					key={i}
					id={Friends[i].id}
					username={Friends[i].username}
					name={Friends[i].name} 
					email={Friends[i].email}/>
				);
	})
	}
		</div>
		);
}

export default CardList;