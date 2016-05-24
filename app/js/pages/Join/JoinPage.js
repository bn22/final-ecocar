import React from 'react';

const Join = React.createClass({
  render: function() {
    return (
      <div className="join-page">
        <h1>Join Page</h1>
        <p>
          Representing the University of Washington, the UW EcoCAR3 team consists of engineering, communications, and business students competing in the EcoCAR 3 competition. 
          Over four years, the team will have modeled the vehicle and potential drivetrain architecture, built a showroom quality hybrid vehicle, 
          and launched an exhaustive outreach program intended to educate consumers on green vehicle technology. With the University of Washingtons 
          background in environmental science and transportation technology, the team is confident in its ability to excel in this competition. 
        </p>
      <h2>Opening positions</h2>
        <div className="job">
          <p className="date">Aug 25</p>
          <h4>Some fancy job title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <a className="btn btn-info btn-lg btn-block" href="#" role="button">Apply</a>
          <hr/>
        </div>
        <div className="job">
          <p className="date">Aug 25</p>
          <h4>Some fancy job title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <a className="btn btn-info btn-lg btn-block" href="#" role="button">Apply</a>
          <hr/>
        </div>
        <div className="job">
          <p className="date">Aug 25</p>
          <h4>Some fancy job title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <a className="btn btn-info btn-lg btn-block" href="#" role="button">Apply</a>
          <hr/>
        </div>
      </div>
    );
  }
});

export default Join;
