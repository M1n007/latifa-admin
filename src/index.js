import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LatifaAdmin from './latifa-admin/index'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LatifaAdmin />, document.getElementById('root'));
registerServiceWorker();
