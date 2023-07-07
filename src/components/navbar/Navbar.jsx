import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../../data'
import './navbar.css'

const Navbar = () => {

    const [setshowMenu, setSetshowMenu] = useState(false)
    return (
        <nav className='nav'>
            <div className={`${setshowMenu ? 'nav_menu show-menu' : 'nav_menu'}`}>
                <ul className="nav_list">
                    {links.map(({ name, icon, path }, index) => {
                        return (
                            <li className="nav_item" key={index}>
                                <NavLink to={path} className={({ isActive }) =>
                                    isActive ? 'nav_link active-nav' : 'nav_link'
                                }
                                    onClick={() => setSetshowMenu(!setshowMenu)}
                                >
                                    {icon}
                                    <h3 className="nav_name">{name}</h3>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className={`${setshowMenu ? 'nav_toggle animate-toggle' : 'nav_toggle'}`}
                onClick={() => setSetshowMenu(!setshowMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Navbar