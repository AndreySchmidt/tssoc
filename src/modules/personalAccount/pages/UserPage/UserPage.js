import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
// import { compose } from 'redux'
import { getUserProfile, getUserStatus, updateUserStatus } from './../../../../redux/thunk'
// import AuthRedirect from './../../../app/components/HOC/AuthRedirect'
import { getUserId, getStatus, getLookingForAJob, getLookingForAJobDescription, getFullName, getContacts, getPhotos } from './../../selectors'
import PageLayout from './../../PageLayout/PageLayout'
import InfoBlock from './components/InfoBlock/InfoBlock'
import HeaderSection from './components/HeaderSection/HeaderSection'
import MainContentAside from './components/MainContentAside/MainContentAside'
import Status from './components/Status/Status'
import ProfileOptionsList from './components/ProfileOptionsList/ProfileOptionsList'

const contentbg = ''

const UserPage = ( {
  lookingForAJob, lookingForAJobDescription, fullName, contacts, photos,
  status, getUserProfile, getUserStatus, updateUserStatus,
  // match
} ) => {

const { userId } = useParams()
// console.log(match.params.id)
// const userId = match.params.id

  useEffect(() => {
    getUserProfile(userId)
    // getUserStatus(userId)
  }, [userId])

//Redirect isAuth const navigate = useNavigate(); navigate("/")
  // if (!isAuth) {
  //   return <Redirect to = "/" />
  // }

  return (
    <PageLayout>
      <InfoBlock />
      <HeaderSection name = {fullName} />
      <MainContentAside photo={photos.small} />

      <div className="main_content_column">
        <Status userId={userId} />
        <div className="c_main_content_wrapper">
          <div className="title"><span>Анкета</span> <Link to="/user/22510/edit_profile">редактировать</Link></div>

          <ProfileOptionsList
            lookingForAJob={lookingForAJob}
            lookingForAJobDescription={lookingForAJobDescription}
            fullName={fullName}
            contacts={contacts}
          />

        </div>
      </div>
    </PageLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    userId: getUserId(state),
    status: getStatus(state),
    lookingForAJob: getLookingForAJob(state),
    lookingForAJobDescription: getLookingForAJobDescription(state),
    fullName: getFullName(state),
    contacts: getContacts(state),
    photos: getPhotos(state),
  }
}
// old (before selectors)
// const mapStateToProps = (state) => {
//   return {
//     // isAuth: state.commonReducer.isAuth,
//     userId: state.personalAccountReducer.userId,
//     status: state.personalAccountReducer.status,
//     lookingForAJob: state.personalAccountReducer.lookingForAJob,
//     lookingForAJobDescription: state.personalAccountReducer.lookingForAJobDescription,
//     fullName: state.personalAccountReducer.fullName,
//     contacts: state.personalAccountReducer.contacts,
//     photos: state.personalAccountReducer.photos,
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: (userId) => dispatch(getUserProfile(userId)),
    getUserStatus: (userId) => dispatch(getUserStatus(userId)),
    updateUserStatus: (userStatus) => dispatch(updateUserStatus(userStatus)),
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthRedirect(UserPage)))
export default connect( mapStateToProps, mapDispatchToProps )( UserPage )
// export default compose( AuthRedirect, withRouter, connect( mapStateToProps, mapDispatchToProps ) )( UserPage )
