import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [peolpe, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople([...peolpe, person]);
      setFirstName('');
      setEmail('');
    } else {
      console.warn('Input field is empty!');
    }
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>Add person</button>
          {/* <button type="submit" onClick={handleSubmit}>Add person</button> */}
          {peolpe.map((person) => {
            return (
              <div key={person.id} className='item'>
                <h3>{person.firstName}</h3>
                <p>{person.email}</p>
              </div>
            );
          })}
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
