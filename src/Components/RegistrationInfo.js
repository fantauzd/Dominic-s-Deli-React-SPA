import React, { useState } from 'react';

function RegistrationInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
      <div>
        <form className="name-form">
        <fieldset>
            <legend>Your Details</legend>
            <label>Please enter your name:
            <input type="text" value={name} className="enter-name" id='1'
                onChange={e => setName(e.target.value)} />
            </label>
            <br></br>
            <label>Please enter your email: 
            <input type="text" value={email} className="enter-email" id='2'
                onChange={e => setEmail(e.target.value)} />
            </label>
        </fieldset>
        <button onClick={e => {
            setName(e.target.value);
            setEmail(e.target.email);
            alert(`Welcome aboard ${name}! We will be contacting you at ${email}`);
            e.preventDefault();
        }}>Submit</button>
        </form>
      </div>
    );
  }
  
  export default RegistrationInfo;