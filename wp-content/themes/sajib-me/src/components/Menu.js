import { Link } from 'react-router-dom';
import React from 'react'
import {useGlobalContext} from '../context'

const Menu = () => {
    const {menuItems} = useGlobalContext();
    return (
        menuItems && (
            <ul className="menu">
                {menuItems.map( menu => {
                    let linkTo =  menu.title.toLowerCase().replace(/ /g, "-");
                    return (
                        <li key={menu.id} className={`menu-item menu-item-${menu.id}`}>
                            <Link to={(linkTo == 'blog') ? '/' : ('/'+linkTo) }>{menu.title}</Link>
                        </li>
                    )
                })}
            </ul>
        )
    )
}

export default Menu