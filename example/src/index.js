import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//If I ever go back; things I would like to do:
// 1. add mobile/touchscreen version
// 2. make input for spacing and sizes
// 3. check centering dots when font size changes. 
// 4. see why spacing on up/down is closer than before
// 5. maybe a drag and drop feature.
// 6. add hover over palette delete button. 