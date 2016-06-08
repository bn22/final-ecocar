import React from 'react';
import Carousel from '../components/Carousel';
import CarouselData from '../data/teamcarousel';

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
      <Carousel data={CarouselData}/>
  </div>
    );
  }
});

export default Team;
