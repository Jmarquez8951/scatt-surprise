import React from 'react';
import './SingleScat.scss';
import scatData from '../../../helpers/data/scatData';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const { scatId } = this.props.match.params;
    scatData.getSingleScat(scatId)
      .then((response) => this.setState({ scat: response.data }))
      .catch((err) => console.error('could not load single scat', err));
  }

  render() {
    const { scat } = this.state;
    return (
      <div className="SingleScat" style={{ backgroundColor: scat.color }}>
        <h1>{scat.location}</h1>
        <p>Shape: {scat.shape}</p>
        <p>Size: {scat.size}</p>
        <p>Temperature: {scat.temperature}</p>
        <p>Viscosity: {scat.viscosity}</p>
        <p>Notes: {scat.notes}</p>
      </div>
    );
  }
}

export default SingleScat;
