import React from 'react';

const ChatField = (props) => {
  return (
    <label>
      <input
        name={props.name}
        type='text'
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.messageChange}
      />
    </label>
  );
}

export default ChatField;
