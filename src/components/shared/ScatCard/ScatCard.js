import React from 'react';
import { Link } from 'react-router-dom';

import scatShape from '../../../helpers/propz/scatShape';
import './ScatCard.scss';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatShape,
  }

  render() {
    const { scat } = this.props;
    const singleLink = `/scats/${scat.id}`;
    const editLink = `/edit/${scat.id}`;
    return (
      <div className="ScatCard col-3 d-flex">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{scat.location}</h5>
            <Link className="btn btn-outline-primary" to={singleLink}><i className="fas fa-binoculars"></i></Link>
            <Link className="btn btn-outline-warning" to={editLink}><i class="fas fa-pen"></i></Link>
            <p className="card-text">{scat.notes}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;