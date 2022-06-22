type initialStateType = {
  appReducer: {
    users : Array<any>,
    pageSize: number,
    totalUsersQuan: number,
    currentPage: number,
    isFetching: boolean,
  },
  personalAccountReducer:{
    status: string,
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
      github: string,
      vk: string,
      facebook: string,
      instagram: string,
      twitter: string,
      website: string,
      youtube: string,
      mainLink: string,
    },
    photos: {
      small: string,
      large: string
    }
  },
  commonReducer:{
    id: number,
    login: string,
    email: string,
    isAuth: boolean,
    isFetching: boolean,
  },
}

const initialState: initialStateType = {
  appReducer: {
    users : [
      // {
      //   id:1,
      //   name:"Name Some",
      //   status:"status",
      //   photos:{small:null},
      //   followed:true
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
