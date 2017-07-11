import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      {React.Children.toArray(children)}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;