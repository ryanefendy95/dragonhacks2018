import React from 'react';

const ChatForm = props =>{
  let onSubmit = () => {
    props.onSubmit()
  }
  return(
    <div>
      <form onSubmit={}>

        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ChatForm;
