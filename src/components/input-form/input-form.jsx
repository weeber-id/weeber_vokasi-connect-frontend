import React from 'react';

const InputForm = ({
  className = '',
  value,
  type,
  onChange,
  name,
  placeholder
}) => {
  const inputClass = [
    `${type === 'textarea' ? 'input-textarea' : 'input-form'}`
  ];

  if (className.length > 0) inputClass.push(className);

  if (type === 'textarea') {
    return (
      <textarea
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className={inputClass.join(' ')}
        value={value}
      />
    );
  }

  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      type={type}
      className={inputClass.join(' ')}
      value={value}
    />
  );
};

export default InputForm;
