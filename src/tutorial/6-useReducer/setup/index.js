import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      setShowModal(true);
      setPeople([...people, newPerson]);
      setName('');
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <Modal />}
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      {people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
