import React from 'react';

const Team = React.createClass({
  render: function() {
    return (
      <div className="team-page">
        <h1>Team Page</h1>
        <p>
         During each year there are two workshops where team members receive hands on training from industry professionals and are able to talk with suppliers and get to know other teams. 
         Throughout the year, a number of reports are due to make sure that teams keep up with competition benchmarks. 
         The UW EcoCAR3 team GM mentor, Michael Abowd, periodically visits to assist and advise the team. 
         At the end of each year is a competition where teams present their designs and their cars are tested.
        </p>
      <h2>MEET THE TEAM</h2>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="item active">
          <img src="http://uwecocar.com/images/home/car.jpg"/>
        </div>
        <div className="item">
          <img src="http://uwecocar.com/images/home/car.jpg"/>
        </div>

        <div className="item">
          <img src="http://uwecocar.com/images/home/car.jpg"/>
        </div>

        <div className="item">
          <img src="http://uwecocar.com/images/home/car.jpg"/>
        </div>
      </div>
      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>
      </div>
  </div>
    );
  }
});

export default Team;
