import Axios from 'axios'
// import * as axios from 'axios'

// const axiosInstance = axios.create({
const axiosInstance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      "API-KEY": "ddf9b7e1-ae79-454b-9403-4fa870ef5765"
    }
  }
)

// axios.get("https://social-network.samuraijs.com/api/1.0/users")
// return response.data.items
// console.log(response.data.items, 'userApi')

export const userApi = {

  authMe() {
    return axiosInstance.get( `/auth/me` )
    .then( ( response: any ) => {
      return response
      // console.log(response.data, 'userApi authMe')
    })
  },

  getItem( userId: number ) {
    return axiosInstance.get( `profile/${userId}` )
    .then( ( response: any ) => {
      return response.data
      // console.log(response.data, 'userApi getItem')
    })
  },

  getList( currentPage = 1, pageSize = 10 ) {
    return axiosInstance.get( `users?page=${ currentPage }&count=${ pageSize }` )
    .then( ( response: any ) => {
      return response.data
      // console.log(response.data.items, 'userApi')
    })
  },

  follow( userId: number ) {
    return axiosInstance.post(`follow/${userId}`)
  },

  unfollow( userId: number ) {
    return axiosInstance.delete(`follow/${userId}`)
  },

  getStatus( userId: number ) {
    return axiosInstance.get( `profile/status/${userId}` )
    .then( ( response: any ) => {
      // console.log(response, 'userApi getStatus')
      return response.data
    })
  },

  updateStatus( userStatus: string ) {
    // second param is an object
    // console.log(userStatus, 'userApi updateStatus')
    return axiosInstance.put( `profile/status`, { status: userStatus } )
      .then( ( response: any ) => {
        return response.data
        // console.log(response.data, 'userApi updateStatus')
      })
  },
  
  savePhoto( photoFile: any ) {
    const formData = new FormData()
    formData.append( "image", photoFile )
    return axiosInstance.put( `profile/photo`, formData, { headers: { 'Content-type': 'multipart/form-data' } } )
      .then( ( response: any ) => {
        // console.log(response.data, 'userApi savePhoto')
        return response.data
      }) //TODO response.data?
  }
}
