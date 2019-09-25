import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (

      <header>



        <div className="row">
          <div className="col-sm-7">
            <h1>OLUWAFEMI</h1>
          </div>

          <div className="col-sm-5">
            <ul id="headerButtons">



              <li className="btn btn-default navbar-btn"><Link to=""> Home </Link></li>

              <li className="btn btn-default navbar-btn"><Link to="/aboutUs"> About Me </Link></li>
              <li className="btn btn-default navbar-btn"><Link to="/projects"> Projects </Link>
              </li>
              <li className="btn btn-default navbar-btn"><Link to="/resume"> Resume </Link></li>
              <li className="btn btn-default navbar-btn"><Link to="/contact"> Contact </Link></li>

            </ul>
          </div>
        </div>



      </header>



    )
  }
}


export default NavBar;

/** import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (

      <header>



        <div className="row">
          <div className="col-sm-4">
            <h1>PORTFOLIO</h1>
          </div>

          <div className="col-sm-8">
            <ul id="headerButtons">

              <li className="navButton"><Link to="/contact"> Contact </Link></li>
              <li className="navButton"><Link to="/resume"> Resume </Link></li>
              <li className="navButton"><Link to="/projects"> Projects </Link></li>

              <li className="navButton"><Link to="/aboutUs"> About Me </Link></li>
              <li className="navButton"><Link to=""> Home </Link></li>


            </ul>
          </div>
        </div>



      </header>



    )
  }
} */