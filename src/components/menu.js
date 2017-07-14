import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { NavLink } from 'react-router-dom';
import { Classes } from '@blueprintjs/core';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

const routes = [
  {
    path: '/sandbox',
    name: 'sandbox',
  },
  {
    path: '/pulsar',
    name: 'pulsar',
  },
];

const Menu = () => {
  return (
    <div className="menu">
      {
        map(routes, (route, key) => {
          return (
            <NavLink
              key={key} 
              to={route.path} 
              activeClassName={Classes.ACTIVE} 
              className={classNames(Classes.BUTTON, Classes.MINIMAL)}>
              {route.name}
            </NavLink>
          );
        })
      }
    </div>
  );
};

Menu.propTypes = {};

export default Menu
