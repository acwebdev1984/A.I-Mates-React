import React, { Component } from 'react';
import CardList from '../Components/CardList';
// we are using ..// to tell searchbox, to leave its current file and search with Componant,js to import.
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/scroll';

// The below creates a state, that can be changed, passing props to its Children.
class app extends Component {
	constructor () {
		super()
		this.state = {
			friends: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		// we "fetch" the data from the source url, in this case are pulling temp users, that can be applied to our card componant.
		fetch('https://jsonplaceholder.typicode.com/users')
		// we then turn the data into json
		.then(response => response.json())
		// we then set the state of friends, to the users that we recieve from the source
		.then(users => this.setState( {friends: users}));
	}

	onSearchChange = (event) => {
		// we have creted a function, that takes an event, in this case a change in the search field, 
		// that sets the state of the searchfield to the event value - in ths case what is typed into the searrchfield
		this.setState({ searchfield: event.target.value })	
		console.log(event);

	}

	// we then "render" onto the DOM, a filter from friends function, to include what is typed into the search field,
	// weather it be in upper or lower case.
	render() {
			const filteredFriends = this.state.friends.filter(friend => {
			return friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			
		})

		if (this.state.friends.length === 0){
			return <h3 className = 'tc'>Looking for A.I's, Please Wait</h3>
		} else {


// Below is always returned to the DOM 
// This is JSX a form of HTML that React understands
// The searchbox is accepting functions created on the searchbox.js componant
// & a funtion, const filteredfriends, written above in the render process 
	return (
		<div className = 'tc'>
	
		<h1 class="f1 lh-title"> MY A.I MATES </h1>
		
		<Searchbox searchChange={this.onSearchChange}/>
		
		<Scroll>
		<CardList Friends={filteredFriends} />
		</Scroll>

		</div>
		);
	}

}}

export default app;
