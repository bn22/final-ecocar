import React from 'react';

const Sponsor = React.createClass({
  render: function() {
    return (
      <div className="sponsor-page">
        <div className="container">
          <div className="jumbotron">
            <h1>Thank you sponsors</h1> 
            <p>EcoCAR3 competition would not be possible without the support of our generous sponsors. Out sponsors provide financial support,
            disounts, technical support, and the opportunity to work with industry professionals.</p> 
          </div>
          <p><i>*If you are interested in becoming a sponsor of the UW EcoCAR 3 team, please contact <a href="mailto:you@youraddress.com">Jeff</a> our business manager</i></p>
          <hr />
        </div>
        <div className="platinum">
          <div className="heading">
            <h1><i>Platinum Team Sponsors</i></h1>
            <hr />
          </div>
          <img src="http://uwecocar.com/images/home/car.jpg"/>
          <img src="http://uwecocar.com/images/home/car.jpg"/>
          <img src="http://uwecocar.com/images/home/car.jpg"/>
          <img src="http://uwecocar.com/images/home/car.jpg"/>
          <img src="http://uwecocar.com/images/home/car.jpg"/>
          <img src="http://uwecocar.com/images/home/car.jpg"/>
        </div>
        <div className="purple">
          <div className="heading">
            <h1><i>Purple Team Sponsors</i></h1>
            <hr/>
          </div>
          <img src="http://uwecocar.com/images/home/car.jpg"/>
          <img src="http://uwecocar.com/images/home/car.jpg"/>
          <img src="http://uwecocar.com/images/home/car.jpg"/>
          <img src="http://uwecocar.com/images/home/car.jpg"/>
          <img src="http://uwecocar.com/images/home/car.jpg"/>
          <img src="http://uwecocar.com/images/home/car.jpg"/>
        </div>
      </div>
    );
  }
});

export default Sponsor;
