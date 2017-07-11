import React from 'react';
import PropTypes from 'prop-types';
import Lang from './lang';
import { Classes } from '@blueprintjs/core';
import classNames from 'classnames';

const Nav = () => {
  return (
    <nav className={classNames(Classes.NAVBAR, Classes.DARK)}>
      <div className={classNames(Classes.NAVBAR_GROUP, Classes.ALIGN_LEFT)}>
        <div className={classNames(Classes.NAVBAR_HEADING)}>oecd-boilerplate</div>
      </div>
      <div className={classNames(Classes.NAVBAR_GROUP, Classes.ALIGN_RIGHT)}>
        <Lang />
      </div>
    </nav>
  );
};

Nav.propTypes = {};

export default Nav;
