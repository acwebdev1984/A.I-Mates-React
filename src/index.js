import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';



// above we destructured the import of friends. this is not required here as we only
// have one variable (array within the file) if we had more, we would destructure
// as above and seperate with commas.
import * as serviceWorker from './serviceWorker';
import 'tachyons';



ReactDOM.render(
	<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
