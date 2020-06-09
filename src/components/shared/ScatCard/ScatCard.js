import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import scatShape from '../../../helpers/propz/scatShape';
import './ScatCard.scss';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatShape,
    removeScat: PropTypes.func.isRequired,
  }

  render() {
    const { scat, removeScat } = this.props;
    const singleLink = `/scats/${scat.id}`;
    const editLink = `/edit/${scat.id}`;
    return (
      <div className="ScatCard col-3 d-flex">
        <div className="card container-fluid">
          <div className="card-body">
            <h5 className="card-title">{scat.location}</h5>
            <Link className="btn btn-outline-primary" to={singleLink}><i className="fas fa-binoculars"></i></Link>
            <Link className="btn btn-outline-warning" to={editLink}><i className="fas fa-pen"></i></Link>
            <button className="btn btn-outline-danger" onClick={() => removeScat(scat.id)}><i className="fas fa-trash-alt"></i></button>

            <p className="card-text">{scat.notes}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
