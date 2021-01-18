import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Pocetna from './components/Pocetna.js';
import Usluge from './components/Usluge.js';
import Cenovnik  from './components/Cenovnik.js';
import Kontakt  from './components/Kontakt.js';



function App() {
  return (
    <BrowserRouter>
     <div className="App">
    <Switch>
   
      
    <Route exact path='/' component={Pocetna} />
    <Route exact path='/usluge' component={Usluge} />
    <Route exact path='/cenovnik' component={Cenovnik} />
    <Route exact path='/kontakt' component={Kontakt} />
    <Route exact path='*' component={()=>{return <div><h1>404 NOT FOUND</h1></div>}} />
  

     

   
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
