import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Page404 from './pages/Page404'
import HomePage from './pages/HomePage'

import UserPage from './../personalAccount/pages/UserPage/UserPage'
import EditProfilePage from './../personalAccount/pages/EditProfilePage/EditProfilePage'

// import PeopleListPage from './pages/PeopleListPage'
const PeopleListPage = React.lazy( () => import('./pages/PeopleListPage') )


// const App: () => ReactNode = ( props: any ) => {
const App = ( props: any ) => {
  return (
    <Routes>
      <Route exact path = '/' component = { HomePage } />
      <Route path = '/people' render = { () => { return <Suspense fallback = { <div>Loading...</div> } > <PeopleListPage /> </Suspense> } } />
      <Route path = '/user/:id(\d+)/edit_profile' component = { EditProfilePage } />
      <Route path = '/user/:id(\d+)' component = { UserPage } />
      <Route path = '/me' component = { UserPage } />
      <Route component = { Page404 } />
    </Routes>
  )
}

export default App
