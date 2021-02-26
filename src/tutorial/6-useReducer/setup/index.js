import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { act } from 'react-dom/test-utils';
// ** reducer function: this is where we deal with state
// ** always return
import { reducer } from './reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newPerson }); // {type: ''} common practice with uppercase
      setName('');
    } else {
      // no value
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() => {
                dispatch({ type: 'REMOVE_ITEM', payload: person.id });
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
