import { userApi } from './../userApi/userApi'
import { setUserProfile, setUserStatus } from './../modules/personalAccount/actions'
import { followBtn, unfollowBtn, setUserList, setTotalUsersQuan, isFetching } from './../modules/app/actions'
import { setMyUserData, setUserPhoto } from './actions'

export const savePhoto = ( photoFile: Array<string> ) => {
  // console.log('savePhoto th', photoFile)
  return  async ( dispatch: any ) => {
    const response = await userApi.savePhoto( photoFile )
    // console.log('savePhoto response th', response)
    if ( response.resultCode === 0 ) {
      dispatch( setUserPhoto( response.data.photos ) )
    }
  }
}

export const authMe = () => {
  return  ( dispatch: any ) => {
    userApi.authMe().then( response => {
      if ( response.data.resultCode === 0 ) {
        dispatch( setMyUserData( response.data.data ) )
      }
    })
  }
}

// promise chaining
// export const getUserProfile = (userId) => {
//   return  ( dispatch ) => {
//     userApi.getItem(userId).then(data => {
//       dispatch(setUserProfile(data))
//     })
//   }
// }

// async await
export const getUserProfile = ( userId: number ) => {
  return  async ( dispatch: any ) => {
    const data = await userApi.getItem( userId )
    dispatch( setUserProfile( data ))
  }
}

export const getUserStatus = ( userId: number ) => {
  return  ( dispatch: any ) => {
    userApi.getStatus( userId ).then( data => {
      // dispatch(setUserStatus(data.statusText))
      dispatch( setUserStatus( data ) )
    })
  }
}

// promise chaining
export const updateUserStatus = ( userStatus: string ) => {
  return  ( dispatch: any ) => {
    userApi.updateStatus( userStatus ).then( data => {
      if ( data.resultCode === 0 ) {
        dispatch( setUserStatus( userStatus ) )
      }
    })
  }
}

// async await
// export const updateUserStatus = (userStatus) => {
//   return  async ( dispatch ) => {
//     const data = userApi.updateStatus(userStatus)
//     if (data.resultCode === 0) {
//       dispatch(setUserStatus(userStatus))
//     }
//   }
// }

export const getUserList = ( currentPage: number, pageSize: number ) => {
  return  ( dispatch: any ) => {
    dispatch( isFetching( true ) )
    userApi.getList( currentPage, pageSize ).then( data => {
      dispatch( setUserList( data.items ) )
      dispatch( setTotalUsersQuan( data.totalCount ) )
    })
    dispatch( isFetching( false ) )
  }
}

export const follow = ( userId: number ) => {
  return  ( dispatch: any ) => {
    userApi.follow( userId ).then( response => {
      if( response.data.resultCode === 0 ){
        dispatch( followBtn( userId ) )
      }
    })
  }
}

export const unfollow = ( userId: number ) => {
  return  ( dispatch: any ) => {
    userApi.unfollow( userId ).then( response => {
      if( response.data.resultCode === 0 ){
        dispatch( unfollowBtn( userId ) )
      }
    })
  }
}
