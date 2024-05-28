import React from 'react';
import PropTypes from "prop-types";
import { LoadButton } from 'styled/styled-button';

  export const Button = ({ onClick }) => {
    
      return (
        <LoadButton type="button" onClick={onClick}>Load more</LoadButton>
      );
    };
  
    Button.propTypes = {
      onClick: PropTypes.func.isRequired,
    }