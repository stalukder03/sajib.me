import { Outlet, useLocation } from 'react-router-dom';
import React from 'react'
import Menu from './Menu'

const SharedFullWidthLayout = () => {
  const {pathname} = useLocation()
  return (
    <div className="site">
      { !pathname.includes('xx') ? (
        <header id="masthead" className="site-header flat" role="banner">
            <div className="site-branding">
                <Menu/>
            </div>
        </header>
      ) : 'Back'}
      
        <Outlet/>
    </div>
  )
}

export default SharedFullWidthLayout