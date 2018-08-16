import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import { robots } from './robots';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
    <div>
        <Card id={robots[0].id} name={robots[0].name}
        email={robots[0].email} />
        <Card id={robots[2].id} name={robots[2].name}
        email={robots[2].email} />
        <Card id={robots[4].id} name={robots[4].name}
        email={robots[4].email} /> 
    </div>,
    document.getElementById('root'));
registerServiceWorker();
