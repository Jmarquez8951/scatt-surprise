import React from 'react';
import './Home.scss';

import ScatCard from '../../shared/ScatCard/ScatCard';
import authData from '../../../helpers/data/authData';
import scatsData from '../../../helpers/data/scatData';

class Home extends React.Component {
  state = {
    scats: [],
  }

  getScats = () => {
    const uid = authData.getUid();
    scatsData.getScatsByUid(uid)
      .then((scats) => {
        this.setState({ scats });
      })
      .catch((err) => console.error('could not get scats', err));
  }

  componentDidMount() {
    this.getScats();
  }

  removeScat = (scatId) => {
    scatsData.deleteScat(scatId)
      .then(() => this.getScats())
      .catch((err) => console.error('could not delete scat', err));
  }

  render() {
    const { scats } = this.state;
    const buildScatCards = scats.map((scat) => (
      <ScatCard key={scat.id} scat={scat} removeScat={this.removeScat}/>
    ));

    return (
      <div className="Home">
        <h1>Home</h1>
        <div className="d-flex flex-wrap">
          {buildScatCards}
        </div>
      </div>
    );
  }
}

export default Home;
