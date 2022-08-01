import { Outlet } from 'react-router-dom';
import React from 'react'
import Sidebar from './Sidebar'

const SharedSidebarLayout = () => {
  return (
    <>
      <div className="sidebar-layout">
        <div className="site">
          <Sidebar/>

          <div id="content" className="site-content ">
            <main id="main" className="site-main" role="main">
              <Outlet/>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default SharedSidebarLayout