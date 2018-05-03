import * as types from '../constants/ActionTypes'

export default function phonebookData(state = [], action) {
  switch (action.type) {
    case types.LOAD_PHONEBOOK_DATA:
      // console.log("ini action di reducer_phonebook_data - types.LOAD_PHONEBOOK_DATA: ", action);
      // console.log();
      return [...state, ...action.payload]
    case types.ADD_PHONEBOOK_DATA:
      // console.log("ini action di reducer_phonebook_data - types.ADD_PHONEBOOK_DATA ",  [...state, ...action.payload]);
      // console.log("ini action di reducer_phonebook_data - types.ADD_PHONEBOOK_DATA - ...state ",  [...state]);
      // console.log("ini action di reducer_phonebook_data - types.ADD_PHONEBOOK_DATA - ...action.payload ",  [...action.payload]);
      // console.log("ini action di reducer_phonebook_data - types.ADD_PHONEBOOK_DATA - action.payload", action.payload);
      return [...state, action.payload]
    case types.DELETE_PHONEBOOK_DATA:
      return state.filter(function(data){return data._id !== action.payload.id})
    case types.SEARCH_PHONEBOOK_DATA:
    console.log();
      return [...action.payload]
    case types.SAVE_EDIT_PHONEBOOK_DATA:
      return state.map(function(data) {return data._id === action._id ? Object.assign({}, action._id) : data  })
    case types.SHOW_EDIT_FORM:
      return state.map(function(data) {return data._id === action._id ? Object.assign({}, data, {isEditing: true} ) : data  });
    case types.HIDE_EDIT_FORM:
      return state.map(function(data) {return data._id === action._id ? Object.assign({}, data, {isEditing: false} ) : data  });
    default:
      return state
  }
}
