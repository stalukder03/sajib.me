import { Link } from 'react-router-dom';
import React from 'react'
import {useGlobalContext} from '../context'

const Sidebar = () => {
    const {siteInfo,userProfile,menuItems} = useGlobalContext();
    return (
        <div id="sidebar" className="sidebar">

            {/* Profile Photo and Title, tag title */}
            <header id="masthead" className="site-header " role="banner">
                <div className="site-branding">
                    <img className="profile-pic" src={userProfile.attachment_url} alt={`${siteInfo?.name} - sajib.me`} />
                    <h1 className="site-title"><a href="http://sajib.local/" rel="home">{siteInfo?.name}</a></h1>
                    <p className="site-description">{siteInfo?.tag_title}</p>
                    <button className="secondary-toggle">Menu and widgets</button>
                </div>
            </header>

            {/* Menu Items render */}
            {menuItems && (
                <div id="secondary" className="secondary">
                    <div id="widget-area" className="widget-area" role="complementary">
                        <aside id="nav_menu-2" className="widget widget_nav_menu">
                            <div className="menu-main-menu-container">
                                <ul id="menu-main-menu" className="menu">
                                    {menuItems.map( menu => {
                                        let linkTo =  menu.title.toLowerCase().replace(/ /g, "-");
                                        return (
                                            <li key={menu.id} className={`menu-item menu-item-${menu.id}`}>
                                                <Link to={(linkTo == 'blog') ? '/' : linkTo }>{menu.title}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sidebar