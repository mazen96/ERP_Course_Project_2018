import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


// ................... Test Imports ....................

//import App from './App';
//import ReportThreats from './Home/Report/report_threats'
import HomeBody from './Home/HomeBody/home_body';

// ............ Test Components ................

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<ReportThreats />, document.getElementById('root'));
ReactDOM.render(<HomeBody />, document.getElementById('root'));


registerServiceWorker();
