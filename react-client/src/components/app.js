import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import AboutUs from './pages/aboutUs.js';
import Projects from './pages/projects.js';
import Resume from './pages/resume.js';
import Contact from './pages/contact.js';
import SimpleMap from './pages/simpleMap.js'
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <br />
          <Route name="home" exact path="/" component={HomePage} />
          <br />
          <Route name="aboutUs" exact path="/aboutUs" component={AboutUs} />
          <br />
          <Route name="projects" exact path="/projects" component={Projects} />
          <br />
          <Route name="resume" exact path="/resume" component={Resume} />
          <br />
          <Route name="contact" exact path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;

/*npm run react-dev
npm run server-dev*/