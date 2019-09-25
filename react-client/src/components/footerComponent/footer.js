import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">




          <div className="col span-1-of-3">
            <ul className="footer-nav">
              <li><Link to="">About Me</Link></li>
              <li><Link to="">Blog</Link></li>
              <li><Link to="">Press</Link></li>
              <li><Link to="">IOS App</Link></li>
              <li><Link to="">Android App</Link></li>
            </ul>
          </div>
          <div className="col span-2-of-3">
            <ul className="social-links">
              <li><SocialIcon url="https://www.facebook.com/aremu.o.olamide" target="_blank"><Link to=""> <i className="ion-social-facebook"></i>   </Link></SocialIcon></li>

              <li><SocialIcon url="https://twitter.com/femiaremu " target="_blank"><Link to=""> <i className="ion-social-twitter"></i>   </Link></SocialIcon></li>

              <li><SocialIcon url="https://www.youtube.com/channel/UCGdtucwtELz3J0K4dkm49ag?view_as=subscriber" target="_blank"><Link to=""> <i className="ion-social-youtube"></i>   </Link></SocialIcon></li>

              <li><SocialIcon url="https://www.instagram.com/aremufemmy1/" target="_blank"><Link to=""> <i className="ion-social-instagram"></i>   </Link></SocialIcon></li>
              <li><Link to=""><i className="ion-social-twitter"></i></Link></li>
              <li><Link to=""><i className="ion-social-googleplus"></i></Link></li>
              <li><Link to=""><i className="ion-social-instagram"></i></Link></li>
            </ul>

          </div>

          <div className="col span-3-of-3">
            <div className=" col s12 center">
              <p>Copyright &copy; 2019 by Maverik. All rights reserved </p>
            </div>
          </div>
        </div>







      </footer>
    )
  }
}

export default Footer;