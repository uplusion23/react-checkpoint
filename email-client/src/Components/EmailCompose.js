import React, { useState, useEffect } from 'react';

const EmailCompose = props => {

  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={"email-compose"}>
      <div className={'group'}>
        <input type={'text'}
               placeholder={'someone@domain.com'}
               data-label={"test"}
               onChange={event => {
                 setRecipient(event.target.value);
               }}
               value={recipient}
        />
        <a onClick={() => {
          props.sendHandler({
            recipient,
            subject,
            message
          });
          setRecipient('');
          setMessage('');
          setSubject('');
        }} > {'Send'} </a>
      </div>
      <div className={'group'}>
        <input type={'text'}
               placeholder={'Subject...'}
               onChange={event => {
                 setSubject(event.target.value);
               }}
               value={subject}
        />
      </div>
      <textarea placeholder={'Enter the body of your message here'}
                onChange={event =>{
                  setMessage(event.target.value);
                }}
                value={message}
      />
    </div>
  )
}

export default EmailCompose;

/*

<div class="email-compose">
    <div class="group">
      <input type="text" placeholder="someone@domain.com" data-label="test" name="recipient"/>
      <a href="#">Send</a>
    </div>
    <div class="group">
      <input type="text" placeholder="Subject..." name="subject"/>
    </div>
    <textarea name="message" placeholder="Enter your message body"></textarea>
  </div>

 */