import {
  SET_USER_PROFILE_ACTION,
  SET_USER_STATUS_ACTION,
} from './../../redux/constants'

export function setUserProfile( userData: any ) {
  return {
    type: SET_USER_PROFILE_ACTION,
    payload: { userData }
  }
}

export function setUserStatus( status: string ) {
  // console.log('setUserStatus ACTION', status)
  return {
    type: SET_USER_STATUS_ACTION,
    payload: { status }
  }
}
