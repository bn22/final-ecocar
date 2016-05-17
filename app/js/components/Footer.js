'use strict';

import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div className="left-content">
          <p><b>UW EcoCar </b><br></br>
            Mechancial Engineering <br></br>
            Engineering Annex, Steven Way <br></br>
            Seattle, WA 98105 <br></br>
            uwecocar3@gmail.com</p>
          </div>
        <div className="right-content">
        <ul className="social-media">
            <li><a href="https://www.facebook.com/UWEcoCAR2"><img src={'../images/Facebook.png'} alt="boohoo"/></a></li>
            <li><a href="https://twitter.com/uwecocar"><img src={'../images/Twitter.png'} alt="boohoo"/></a></li>
            <li><a href="mailto:uwecocar3@gmail.com"><img src={'../images/Gmail.png'} alt="boohoo"/></a></li>
          </ul>
        </div>
      </footer>
    );
  }

}

export default Footer;