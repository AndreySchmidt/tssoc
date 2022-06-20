const initialState = {
  appReducer: {
    users : [
      // {
      //   id:1,
      //   name:"Name Some",
      //   status:"status",
      //   photos:{small:null},
      //   followed:true
      // },
      // {
      //   id:2,
      //   name:"Name Some",
      //   status:"status",
      //   photos:{small:null},
      //   followed:false
      // },
    ],
    pageSize:10,
    totalUsersQuan:0,
    currentPage: 1,
    isFetching: false,
  },
  personalAccountReducer:{
    status: '',
    userId: 0,
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    contacts: {
      github: '',
      vk: '',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '',
      youtube: '',
      mainLink: '',
    },
    photos: {
      small: '',
      large: ''
    }
  },
  commonReducer:{
    // userId: 0,
    id: 0,
    login: '',
    email: '',
    isAuth: false,
    isFetching: false,
  },
}

export default initialState
