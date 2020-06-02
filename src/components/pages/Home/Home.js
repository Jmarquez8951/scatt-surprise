import React from 'react';
import './Home.scss';

import { Link } from 'react-router-dom';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const scatId = 'scat12345';
    this.props.history.push(`/edit/${scatId}`);
  }

  render() {
    return (
      <div className="Home">
        <h1>Home Component</h1>
        <button className="btn btn-dark" onClick={this.editEvent}>Edit a thing</button>
        <Link to='/scats/klasgkjasdfkjakjsdihhirheguh'>View Single</Link>
        <Link to='/new'>New Scat</Link>
      </div>
    );
  }
}

export default Home;
