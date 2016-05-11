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
       	<ul className="social-media">
            <a href="https://www.facebook.com/UWEcoCAR2"><li className="facebook-icon"></li></a>
            <a href="https://twitter.com/uwecocar"><li className="twitter-icon"></li></a>
            <a href="mailto:uwecocar3@gmail.com"><li className="gmail-icon"></li></a>
          </ul>


      </footer>
    );
  }

}

export default Footer;