import React from 'react'

import plane from '../../assets/img/plane.png'

import './Header.scss'

const Header = () => {
  return (
    <header className="header__blog">
      <img src={plane} alt="plane" className="header__image" />
    </header>
  )
}

export default Header
