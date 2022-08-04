import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaLongArrowAltLeft  } from 'react-icons/fa';
import React from 'react'
import Menu from './Menu'

const SharedFullWidthLayout = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  return (
    <div className="site">
      <header id="masthead" className="site-header flat" role="banner">
        <div className="site-branding">
          {!pathname.includes('my-cv') ? <Menu/> : <button className="go-back" onClick={() => {navigate(-1) || navigate('/')}}><FaLongArrowAltLeft/> Go back</button>} 
        </div>
      </header>
      <Outlet/>
    </div>
  )
}

export default SharedFullWidthLayout