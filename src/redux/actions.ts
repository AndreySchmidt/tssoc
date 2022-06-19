import {
  LOGIN_ACTION,
  SET_MY_USER_DATA_ACTION,
  SET_USER_PHOTO_ACTION,
} from './constants'

// login form data
export function login ( userId: number, email: string, login: string ) {
  return {
    type: LOGIN_ACTION,
    payload: { userId, email, login }
  }
}

//server data
export function setMyUserData ( data: any ) {
  return {
    type: SET_MY_USER_DATA_ACTION,
    payload: data
  }
}

//
export function setUserPhoto ( data: any ) {
  return {
    type: SET_USER_PHOTO_ACTION,
    payload: data
  }
}
