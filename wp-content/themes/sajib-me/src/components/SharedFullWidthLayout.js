import { Outlet } from 'react-router-dom';
import React from 'react'
import Menu from './Menu'

const SharedFullWidthLayout = () => {
  return (
    <div className="site">
        <header id="masthead" className="site-header flat" role="banner">
            <div className="site-branding">
                <Menu/>
            </div>
        </header>
        <Outlet/>
    </div>
  )
}

export default SharedFullWidthLayout