import React from 'react'
import { Link } from 'react-router-dom'

import nophoto from './../../../../../../no-photo.gif'

const MainContentAside = ( { photo } ) => {
  return (
    <div className="main_content_aside">
      <div className="avatar_image_container">
        <img className="avatar_image" src={photo || nophoto} alt="" />
      </div>
    </div>
  )
}

export default MainContentAside
