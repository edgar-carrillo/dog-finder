import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Assets
import heartIconBlack from './heart-icon-black.svg';
import heartIconPink from './heart-icon-pink.svg';

function HeartIcon({ className, isSaved }) {
  return (
    <input
      className={className}
      type="image"
      src={isSaved ? heartIconPink : heartIconBlack}
      alt="Heart Icon"
    />
  );
}

const StyledHeartIcon = styled(HeartIcon)`
  height: 30px;
`;

HeartIcon.propTypes = {
  className: PropTypes.string.isRequired,
  isSaved: PropTypes.bool.isRequired,
};

export default StyledHeartIcon;
