import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Classes } from '@blueprintjs/core';

const Pulsar = () => {
  return (
    <div className="pulsar">
      <div className={classNames(Classes.CARD, Classes.ELEVATION_2)}>
        <h1>
          <FormattedMessage id="pulsar.title" />
        </h1>
        <p className={Classes.UI_TEXT_LARGE}>
          <FormattedMessage id="pulsar.description" />
        </p>
      </div>
    </div>
  );
};

Pulsar.propTypes = {};

export default Pulsar;
