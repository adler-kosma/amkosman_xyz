import './styles/App.css';
import RouteElement from './components/Route';
import Menu from './pages/Menu';
import About from './pages/About';
import Compositions from './pages/Compositions';
import Installations from './pages/Installations';
import Releases from './pages/Releases';
import Contact from './pages/Contact'
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
          <RouteElement path="/compositions">
            <Menu />
            <Compositions />
          </RouteElement>
          <RouteElement path="/installations">
            <Menu />
            <Installations />
          </RouteElement>
          <RouteElement path="/releases">
            <Menu />
            <Releases />
          </RouteElement>
          <RouteElement path="/contact">
            <Menu />
            <Contact />
          </RouteElement>
        </div>
      </div>
  );
}
