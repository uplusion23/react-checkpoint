import React from 'react';

const EmailListObject = props => {
  return (
    <div className={"email-object"} onClick={event => props.clickHandler(event, props.email)}>
      <span>{props.email.sender}</span>
      <span className={"preview"}> {props.email.subject}</span>
      <span className={"date"}>{props.email.date}</span>
    </div>

  )
}

export default EmailListObject;