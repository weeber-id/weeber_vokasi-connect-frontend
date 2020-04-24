import React from 'react';

const Button = ({ children, className, onClick }) => {
  const btnClass = className ? `btn ${className}` : 'btn';
  return (
    <button onClick={onClick} type="button" className={btnClass}>
      {children}
    </button>
  );
};

export default Button;
