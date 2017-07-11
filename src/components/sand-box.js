import React from 'react';
import PropTypes from 'prop-types';
import Pulsar from './pulsar';
import { div } from 'glamorous';

const StyledDiv = div({ padding: 20 });

const SandBox = () => {
  return (
    <StyledDiv className="sand-box">
      <Pulsar />
    </StyledDiv>
  );
};

SandBox.propTypes = {};

export default SandBox;
