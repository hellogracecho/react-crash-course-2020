export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please eneter a value',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const removedItem = state.people.filter((p) => p.id == action.payload);
    const filterdPeople = state.people.filter((p) => p.id !== action.payload);
    return {
      ...state,
      people: filterdPeople,
      isModalOpen: true,
      modalContent: removedItem[0].name + ' is removed',
    };
  }
  throw new Error('no matching action type');
};
