import './styles/App.css';
import RouteElement from './components/Route';
import Menu from './pages/Menu';
import About from './pages/About';
import Installations from './pages/Installations';
import Sounds from './pages/Sounds';
import Discography from './pages/Discography';
import Contact from './pages/Contact'
import Works from './pages/Works';
import * as React from "react";




export default function App () {
  return (
      <div className="img-background" style={{ height: "100vh"}}>
        <RouteElement path="/">
          <Menu />
        </RouteElement>
        <div>
          <RouteElement path="/about">
            <Menu />
            <About />
          </RouteElement>
          <RouteElement path="/works">
            <Menu />
            <Works />
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
