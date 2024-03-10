import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { label, className, onClick, disabled } = props;
  return (
    <>
      <button className={className} onClick={onClick} disabled={disabled}>
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.any.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
