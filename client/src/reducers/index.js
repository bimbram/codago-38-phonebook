import { combineReducers } from 'redux';
import PhonebookReducer from './reducer_phonebook_data'
import status from './reducer_status'
const rootReducer = combineReducers({
  phonebooks: PhonebookReducer,
  status: status
});

export default rootReducer;
