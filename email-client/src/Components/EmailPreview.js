import React from 'react';
import EmailCompose from "./EmailCompose";

const EmailPreview = props => {
  return (
    <div className={'email-preview'}>
      <h2>{(props.email && props.email.sender) ? props.email.sender : ''}</h2>
      <span>{(props.email && props.email.subject) ? props.email.subject : ''}</span>
      <p>{(props.email && props.email.message) ? props.email.message : ''}</p>
      <EmailCompose sendHandler={props.sendHandler}/>
    </div>
  );
}

export default EmailPreview;

/*
  <h2>Email title here</h2>
  <span>Email subject here, this is a bit longer</span>
  <p>Here is the email body. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  <div class="email-compose">
    <input type="text" name="recipient"/>
    <input type="text" name="subject"/>
    <input type="text" name="message"/>
  </div>

 */