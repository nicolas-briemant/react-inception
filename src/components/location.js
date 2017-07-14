import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Location = ({ location }) => {
  return (
    <span>{location.pathname}</span>
  );
};

Location.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Location);
