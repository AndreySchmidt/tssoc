import {
  IS_FETCHING_ACTION,
  SET_USER_LIST_ACTION,
  SET_TOTAL_USERS_QUANTITY_ACTION,
  FOLLOW_ACTION,
  UNFOLLOW_ACTION,
  SET_CURRENT_PAGE_NUMBER_ACTION,
} from './../../redux/constants'



export function followBtn ( userId: number) {
  return {
    type: FOLLOW_ACTION,
    payload: { userId }
  }
}

export function unfollowBtn ( userId: number) {
  return {
    type: UNFOLLOW_ACTION,
    payload: { userId }
  }
}

export function setUserList ( userList: Array<Object> ) {
  return {
    type: SET_USER_LIST_ACTION,
    payload:{ userList }
  }
}

export function setTotalUsersQuan ( quantity: number) {
  return {
    type: SET_TOTAL_USERS_QUANTITY_ACTION,
    payload:{ usersQuantity: Number( quantity ) }
  }
}

export function setCurrentPage ( currentPage: number ) {
  return {
    type: SET_CURRENT_PAGE_NUMBER_ACTION,
    payload:{ currentPage: Number( currentPage ) }
  }
}

export function isFetching ( value: boolean ) {
  return {
    type: IS_FETCHING_ACTION,
    payload:{ isFetching: value }
  }
}
