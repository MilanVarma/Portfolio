import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Contact from './Contact';
import MenuIcon from '@mui/icons-material/Menu';



function App() {
  return (
    <Router>
      <nav className="nav">
      <input type="checkbox" id="check" />
          <label for="check" className='checkButton'><i><MenuIcon /></i></label>
          <label  className='logo'><Link className='link'  to="/">milan.</Link></label>
        <ul>
        <li ><Link className='link'  to="/">Home</Link></li>
        <li><Link className='link' to="/about">About</Link></li>
          <li><Link className='link' to="/contact">Contact</Link></li>
          
          
         
         
          
         
         
        </ul>
      </nav>

      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/projects">

        </Route>

        <Route path="/about">
            <About />
        </Route>

        <Route path="/">
            <Home />
        </Route>    
      </Switch>
    </Router>
  );
}

export default App;
