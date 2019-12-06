import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
   <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="navbar-brand">
         БлоГ
      </div>

      <ul className="navbar-nav">
         <li className="nav-item">
            <NavLink to='/' className="nav-link" exact>
               Главная
            </NavLink>
         </li>
         <li className="nav-item">
            <NavLink to='/about' className="nav-link">
               О приложении
            </NavLink>
         </li>

      </ul>
   </nav>
)