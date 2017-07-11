import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const NotFound = () => {
  return (
    <div className="not-found">
      <FormattedMessage id="route.not.found" />
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;