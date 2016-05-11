'use strict';

import React              from 'react';

import Header             from './components/Header';
import Footer             from './components/Footer';

//Loads the Header and Footer into a template page
class App extends React.Component {
  render() {
    return (
      <div>

        <Header />

        <div className="mainContent">
          {this.props.children}
          </div>

        <Footer />

      </div>
    );
  }

}

export default App;