'use strict';

import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
          <ul className="nav-bar">
            <li><img id="logo" src={'http://uwecocar.com/images/UWEcoCarLogoLarge.png'} /></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/join">Join</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/sponsor">Sponsor</Link></li>
            <li><Link to="/team">Team</Link></li>
          </ul>

      </header>
    );
  }

}

export default Header;