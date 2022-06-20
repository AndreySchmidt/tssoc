import React from 'react'

import Logo from './../Logo/Logo'
import DistrictSelect from './../DistrictSelect/DistrictSelect'
import MenuTopStick from './../MenuTopStick/MenuTopStick'
import MenuTop from './../MenuTop/MenuTop'

const Header = () => {
  return (
    <div className="header">
      <div className="header_top_section">
        <div className="container">
          <Logo />
          <DistrictSelect />
          <MenuTopStick />
        </div>
      </div>

      <div className="header_bottom_section">
        <div className="container">
        <MenuTop />
        </div>
      </div>
    </div>
  )
}

export default Header
