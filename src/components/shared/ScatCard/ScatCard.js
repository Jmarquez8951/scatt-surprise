import React from 'react';
import PropTypes from 'prop-types';

import './ScatCard.scss';

class ScatCard extends React.Component {
  static propTypes = {
    scat: PropTypes.object.isRequired,
  }

  render() {
    const { scat } = this.props;
    return (
      <div className="ScatCard">
        {scat.id}
      </div>
    );
  }
}

export default ScatCard;
