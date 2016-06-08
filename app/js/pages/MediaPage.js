import React from 'react';

const Media = React.createClass({
  render: function() {
    return (
      <div className="media-page">
        <h2>Interactive car placeholder</h2>
        <h2>Slider highlight</h2>
        <h1>Media Page</h1>
        <p>
        The University of Washington has extensive experience in advanced vehicle technologies. 
        From developing composite materials for Boeing to designing a carbon fiber monocoque for Lamborghini, 
        University of Washington engineering students have the tools to succeed in pushing the envelope. 
        In addition, with the previous advanced vehicle work experience from the EcoCAR 2, the team will sure be well equipped 
        for the next challenge. The UW EcoCAR3 teams goal is to maintain our laboratory for ongoing alternative fuel 
          research beyond the scope of the competition. The UW Advanced Vehicle Works shall continue and thrive.
        </p>
        <div className="row">
          <div className="col-md-5" id="news">
            <h3>News</h3> 
            <div className="new"> 
              <img src="http://uwecocar.com/images/home/car.jpg"/>
              <div className="content">
                <i className="date">April 19th, 2012</i>
                <br/>
                <b className="title">Kings 5 News</b>
                <p>Something important happened today<br/><a href="#">Learn more<span className="glyphicon glyphicon-chevron-right" aria-hideen="true"></span></a></p>
              </div>
            </div>
            <div className="new"> 
              <img src="http://uwecocar.com/images/home/car.jpg"/>
              <div className="content">
                <i className="date">April 19th, 2012</i>
                <br/>
                <b className="title">Kings 5 News</b>
                <p>Something important happened today<br/><a href="#">Learn more<span className="glyphicon glyphicon-chevron-right" aria-hideen="true"></span></a></p>
              </div>
            </div>
          </div>
          <div className="col-md-7" id="upcoming">
            <h3>Upcoming events</h3>
            <table className="table table-hover">
              <thead>
                <th>Date</th>
                <th>Event Name</th>
              </thead>
              <tbody>
                <tr>
                  <td>Sep 10, 2016</td>
                  <td>Something important happened today</td>
                </tr>
                <tr>
                  <td>Sep 10, 2016</td>
                  <td>Something important happened today</td>
                </tr>
                <tr>
                  <td>Sep 10, 2016</td>
                  <td>Something important happened today</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});

export default Media;
