import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) { // form validation
      const person = {id: new Date().getTime().toString(), firstName, email};
      setPeople((people) => {
        return [...people, person]
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty value..');
    }
  };

  return <>
  <article>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="firstName">Name: </label>
        <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      </div>
      <div className="form-control">
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <button type="submit">Add person</button>
      {/* <button type="submit" onClick={handleSubmit}>Add person</button> */}
    </form>
    {
      people.map((person) => {
        const {id, firstName, email} = person;
        return <div key={id} className="item">
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      })
    }
  </article>
  </>;
};

export default ControlledInputs;
