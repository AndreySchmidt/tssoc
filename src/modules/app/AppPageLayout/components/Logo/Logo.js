import React from 'react'
import { Link } from 'react-router-dom'

// import logo from './../../../../../img/logo.jpg'
const logo = ''

const Logo = () => {
  return(
    <div className="c_logo">
        <Link to=""><img src={ logo } alt=""/></Link>
    </div>
  )
}

export default Logo
