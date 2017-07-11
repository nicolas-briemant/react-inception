import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { map } from 'lodash';
import { getAvailableLocales, getLocale } from '../lib/i18n/selectors';
import { changeLocale } from '../lib/i18n/action-creators';
import { Button, Classes } from '@blueprintjs/core';
import classNames from 'classnames';

const mapDispatchToProps = {
  changeLocale,
};

const mapStateToProps = createStructuredSelector({
  availableLocales: getAvailableLocales(),
  locale: getLocale(),
});

const Lang = ({ availableLocales, locale, changeLocale }) => (
  <div className="lang">
    {
      map(availableLocales, (l, key) => {
        return (
          <Button
            key={key}
            text={l.label}
            className={classNames(Classes.MINIMAL, { [Classes.ACTIVE]: key == locale })}
            onClick={() => changeLocale(key)}
          />
        );
      })
    }
  </div>
);

Lang.propTypes = {
  availableLocales: PropTypes.object,
  locale: PropTypes.string,
  changeLocale: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Lang);
