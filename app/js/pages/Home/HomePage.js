import React from 'react';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <div id="slider">
          <h1>Slider goes here</h1>
        </div>
        <div id="who-are-we">
          <img src="http://uwecocar.com/images/home/car.jpg"/>
          <div className="content">
            <h2>Who are we?</h2>
            <p>
              EcoCAR 3 builds on a proud 25-year history of U.S. Department of Energy (DOE) Advanced Vehicle Competitions that exemplify the power of public/
             private partnerships in providing invaluable experience and training to promising, young minds readying to enter the job market.
            </p>
          </div>
        </div>
        <div className="summary">
          <div className="content">
            <h2>Summary about ecocar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <img src="https://green.uw.edu/blog/sites/default/files/EcoCAR%20collage.png" />
        </div>
        <div className="goals">
          <img src="http://www.washington.edu/news/files/2012/03/Austinteamphotocropped.jpg" />
          <div className="content">
            <h2>Goals for the team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
    );
  }
});

export default Home;
