import React from 'react';

const Button = ({
  text, className, type = 'button', ...rest
}) => {
  const buttonClassName = `button ${className}`;
  return (
    <button type={type} {...rest} className={buttonClassName}>
      {text}
    </button>
  );
};
export default Button;
