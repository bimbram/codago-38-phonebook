import { SHOW_ADD_FORM, HIDE_ADD_FORM, SHOW_EDIT_FORM, HIDE_EDIT_FORM } from '../constants/ActionTypes'

const initialState = {
  showAddForm: false
}

export default function status(state = initialState, action){
  switch (action.type) {
    case SHOW_ADD_FORM:
      console.log("ini state di reducer_stateus - SHOW_ADD_FORM: ", state);
      state.showAddForm = true
      return Object.assign({}, state);
    case HIDE_ADD_FORM:
      console.log("ini state di reducer_status - HIDE_ADD_FORM: ", state);
      state.showAddForm = false
      return Object.assign({}, state);
    default:
      return state;
  }
}
