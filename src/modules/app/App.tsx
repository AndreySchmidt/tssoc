// import React from 'react'
// import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Page404 from './pages/Page404'
import HomePage from './pages/HomePage'

import UserPage from './../personalAccount/pages/UserPage/UserPage'
import EditProfilePage from './../personalAccount/pages/EditProfilePage/EditProfilePage'

import PeopleListPage from './pages/PeopleListPage'
// const PeopleListPage = React.lazy( () => import('./pages/PeopleListPage') )


// const App: () => ReactNode = ( props: any ) => {
const App = () => {
  return (
    <Routes>
      <Route index element = { <HomePage /> } />
      <Route path = '/people' element = { <PeopleListPage /> } />

      <Route path = '/user/:userId/edit_profile' element = { <EditProfilePage /> } />
      <Route path = '/user/:userId' element = { <UserPage /> } />
      <Route path = '/me' element = { <UserPage /> } />
      <Route path = "*" element = { <Page404 /> } />
    </Routes>
  )
}

export default App
// <Route path = '/' element = { <HomePage /> } />
// <Route path = '/people' render = { () => { return <Suspense fallback = { <div>Loading...</div> } > <PeopleListPage /> </Suspense> } } />
