import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Switch} from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
  <Switch>


    <App />
    
    </Switch>
    </BrowserRouter>
  ,
  document.getElementById('root')
);
