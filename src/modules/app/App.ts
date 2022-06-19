// Switch -> Router
import React, { Suspense } from 'react'
import { Router, Route } from 'react-router-dom'

import Page404 from './pages/Page404'
import HomePage from './pages/HomePage'

import UserPage from './../personalAccount/pages/UserPage/UserPage'
import MyCommentsPage from './../personalAccount/pages/MyCommentsPage/MyCommentsPage'
import MyListPage from './../personalAccount/pages/MyListPage/MyListPage'
import MyBlogListPage from './../personalAccount/pages/MyBlogListPage/MyBlogListPage'
import MyBlogItemPage from './../personalAccount/pages/MyBlogItemPage/MyBlogItemPage'
import MyConsultationListPage from './../personalAccount/pages/MyConsultationListPage/MyConsultationListPage'
import MessPage from './../personalAccount/pages/MessPage/MessPage'
import EditProfilePage from './../personalAccount/pages/EditProfilePage/EditProfilePage'
import FriendPage from './../personalAccount/pages/FriendPage/FriendPage'
import PhotoPage from './../personalAccount/pages/PhotoPage/PhotoPage'
import EditPhotoPage from './../personalAccount/pages/EditPhotoPage/EditPhotoPage'
import CalcListPage from './../personalAccount/pages/CalcListPage/CalcListPage'
import CalcItemPage from './../personalAccount/pages/CalcItemPage/CalcItemPage'
import PlanPage from './../personalAccount/pages/PlanPage/PlanPage'
import CartPage from './../personalAccount/pages/CartPage/CartPage'
import VideoPage from './../personalAccount/pages/VideoPage/VideoPage'
import AnnouncementPage from './../personalAccount/pages/AnnouncementPage/AnnouncementPage'
// import PeopleListPage from './pages/PeopleListPage'
const PeopleListPage = React.lazy( () => import('./../personalAccount/pages/AnnouncementPage/AnnouncementPage') )


// const App: () => ReactNode = ( props: any ) => {
const App = ( props: any ) => {
  return (
    <Router>
      <Route exact path='/' component={ HomePage } />
      <Route path='/people' render = { () => { return <Suspense fallback = { <div>Loading...</div> } > <PeopleListPage /> </Suspense> } } />
      <Route path='/user/:id(\d+)/announcement' component={ AnnouncementPage } />
      <Route path='/user/:id(\d+)/video' component={ VideoPage } />
      <Route path='/user/:id(\d+)/cart' component={ CartPage } />
      <Route path='/user/:id(\d+)/plan' component={ PlanPage } />
      <Route path='/user/:id(\d+)/calculator_item' component={ CalcItemPage } />
      <Route path='/user/:id(\d+)/calculator' component={ CalcListPage } />
      <Route path='/user/:id(\d+)/photo_edit' component={ EditPhotoPage } />
      <Route path='/user/:id(\d+)/photo' component={ PhotoPage } />
      <Route path='/user/:id(\d+)/friend' component={ FriendPage } />
      <Route path='/user/:id(\d+)/edit_profile' component={ EditProfilePage } />
      <Route path='/user/:id(\d+)/mess' component={MessPage} />
      <Route path='/user/:id(\d+)/consultation' component={ MyConsultationListPage } />
      <Route path='/user/:id(\d+)/blog_item' component={ MyBlogItemPage } />
      <Route path='/user/:id(\d+)/blog' component={ MyBlogListPage } />
      <Route path='/user/:id(\d+)/my_list' component={ MyListPage } />
      <Route path='/user/:id(\d+)/comment' component={ MyCommentsPage } />
      <Route path='/user/:id(\d+)' component={ UserPage } />
      <Route path='/me' component={ UserPage } />

      <Route component={ Page404 } />
    </Router>
  )
}

export default App
