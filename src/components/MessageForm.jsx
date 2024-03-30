import { useState } from 'react'
import React from 'react'
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const {chatId, creds} = props;

  const handleSubmit = () => {
    
  }



  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);


  }
  return (
    <div>
      <form className='message-form' onSubmit={handleSubmit}>
          <input className='message-input'
          placeholder='send a message...'
          value = {value}
          onChange = { handleChange }
          onSubmit = { handleSubmit }
          />
      </form>
    </div>
  )
}

export default MessageForm;
