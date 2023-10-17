import './styles/App.css';
import RouteElement from './components/Route';
import Menu from './pages/Menu';
import About from './pages/About';
import Installations from './pages/Installations';
import Sounds from './pages/Sounds';
import Discography from './pages/Discography';
import background from './img/collage-orgel-shoe.png';
import Contact from './pages/Contact'
import * as React from "react";




export default function App () {
  return (
      <div className="img-background" style={{ backgroundImage: `url(${background})`, height: "653px"}}>
        <RouteElement path="/">
          <Menu />
        </RouteElement>
        <div>
          <RouteElement path="/about">
            <Menu />
            <About />
          </RouteElement>
          <RouteElement path="/installations">
            <Menu />
            <Installations />
          </RouteElement>
          <RouteElement path="/multichannel">
            <Menu />
            <Sounds />
          </RouteElement>
          <RouteElement path="/discography">
            <Menu />
            <Discography />
          </RouteElement>
          <RouteElement path="/contact">
            <Menu />
            <Contact />
          </RouteElement>
        </div>
      </div>
  );
}
