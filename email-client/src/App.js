import './App.css';
import React, { useState, useEffect } from 'react';
import Middleman from './Util/Middleman';
import EmailList from './Components/EmailList.js';
import EmailPreview from './Components/EmailPreview.js';

const App = () => {
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState({});
  const [composing, setComposing] = useState(false);

  const displayPreview = (event, email)  => {
    setEmail(email);
  }

  const sendEmailHandler = (data = {
    recipient: "",
    subject: "<No Subject",
    message: ""
  }) => {
    Middleman.SendEmail(data).then(response => {
      console.log(response);
      setComposing(false);
    });
  }

  useEffect(() => {
    async function getEmails() {
      const emailsObject = await Middleman.GetEmails();
      setEmails(emailsObject);
    }

    getEmails();
  }, []);

  return (
    <div className="App" data-composing={composing}>
      <EmailList emails={emails} clickHandler={(event, email) => displayPreview(event, email)}/>
      <EmailPreview email={email} sendHandler={event => sendEmailHandler(event)}/>
      <div className='compose'
           onClick={() => {
             setComposing(true);
           }}
      >
        <i className='gg-math-plus'/></div>
    </div>
  );
}

export default App;
