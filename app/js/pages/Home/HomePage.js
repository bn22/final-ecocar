import React from 'react';

const Home = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="home-page">
          <div id="slider">
            <h1>Slider goes here</h1>
          </div>
          <div id="who-are-we">
            <div className="row">
              <div className="col-md-6">
                <img src="http://uwecocar.com/images/home/car.jpg"/>
              </div>
              <div className="col-md-6" id="who-content">
                <h1><b>Who are we?</b></h1>
                <p>
                  EcoCAR 3 builds on a proud 25-year history of U.S. Department of Energy (DOE) Advanced Vehicle Competitions that exemplify the power of public/
                 private partnerships in providing invaluable experience and training to promising, young minds readying to enter the job market.
                </p>
              </div>
            </div>
          </div>
          <div className="summary">
            <div className="row">
              <div className="col-md-6" id="sum-content">
                <h2><b>Summary about ecocar</b></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco asdasdasdas</p>
              </div>
              <div className="col-md-6">
                <img src="https://green.uw.edu/blog/sites/default/files/EcoCAR%20collage.png" />             
              </div>
            </div>
          </div>
          <div className="goals">
            <div className="row">
              <div className="col-md-6">
                <img src="http://uwecocar.com/images/home/car.jpg"/>
              </div>  
              <div className="col-md-6" id="goals-content">
                <h2><b>Goals for the team</b></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamsunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          <div id="events">
            <div className="upcoming-events">
                <h2>UPCOMING EVENTS</h2>
                <div className="upevents">
                  <div className="date">
                    <h4 className="month"><b>AUG</b></h4>
                    <h4 className="day">2</h4>
                  </div>
                  <p>Getting together for some ice cream
                      <br/><a href="">Learn more...</a></p> 
                </div>
                <div className="upevents">
                  <div className="date">
                    <h4 className="month"><b>JUL</b></h4>
                    <h4 className="day">2</h4>
                  </div>
                  <p>Graduation getting together
                      <br/><a href="">Learn more...</a></p> 
                </div>
                <div className="upevents">
                  <div className="date">
                    <h4 className="month"><b>JAN</b></h4>
                    <h4 className="day">2</h4>
                  </div>
                  <p>Testing 101, its gonna be fun
                      <br/><a href="">Learn more...</a></p> 
                </div>
            </div>
            <div className="all-events">
              <button type="button" className="btn btn-info"><b>View all events</b></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Home;
