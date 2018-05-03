import * as types from '../constants/ActionTypes'
import {API_SERVER_URL} from '../constants/general'
import axios from 'axios';

export function loadData() {
  const request = axios.get(API_SERVER_URL)
  return {
    type: types.LOAD_PHONEBOOK_DATA,
    payload: request
  }
}

export function addData(name, phone) {
  const request = axios.post(API_SERVER_URL, {
    name: name,
    phone: phone
  })

  return {
    type: types.ADD_PHONEBOOK_DATA,
    payload: request
  }
}

export function deleteData(id) {
  const request = axios.delete(API_SERVER_URL + id)

  return {
    type: types.DELETE_PHONEBOOK_DATA,
    payload: request,
    _id: id
  }
}

export function searchData(name, phone) {
  const request = axios.post(API_SERVER_URL + `search`, {
    name: name,
    phone: phone
  })

  return {
    type: types.SEARCH_PHONEBOOK_DATA,
    payload: request
  }
}

export function saveEditData(id, name, phone) {
  const request = axios.put(API_SERVER_URL + id, {
    name: name,
    phone: phone
  })
  return {
    type: types.SAVE_EDIT_PHONEBOOK_DATA,
    payload: request,
    id: id
  }
}

export function showAddForm() {
  return {
    type: types.SHOW_ADD_FORM
  }
}

export function hideAddForm() {
  return {
    type: types.HIDE_ADD_FORM
  }
}

export function showEditForm(id) {
  return {
    type: types.SHOW_EDIT_FORM,
    _id: id
  }
}

export function hideEditForm(id) {
  return {
    type: types.HIDE_EDIT_FORM,
    _id: id
  }
}
