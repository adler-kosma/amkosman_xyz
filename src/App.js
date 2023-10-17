import './styles/App.css';
import Route from './components/Route';
import Menu from './pages/Menu';
import About from './pages/About';
import Installations from './pages/Installations';
import Sounds from './pages/Sounds';
import Discography from './pages/Discography';
import background from './img/collage-orgel-shoe.png';
import Contact from './pages/Contact'
import * as React from "react";
import { Navigate } from "react-router-dom";




export default function App () {
  return (
      <div className="img-background" style={{ backgroundImage: `url(${background})`, height: "653px"}}>
        <Route path="/">
          <Menu />
        </Route>
        <div>
          <Route path="/about">
            <Menu />
            <About />
          </Route>
          <Route path="/installations">
            <Menu />
            <Installations />
          </Route>
          <Route path="/multichannel">
            <Menu />
            <Sounds />
          </Route>
          <Route path="/discography">
            <Menu />
            <Discography />
          </Route>
          <Route path="/contact">
            <Menu />
            <Contact />
          </Route>
      
        </div>
      </div>
  );
}
