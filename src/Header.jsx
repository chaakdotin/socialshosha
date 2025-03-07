import React from 'react'
import { Outlet } from 'react-router';
import { NavLink, Link } from 'react-router-dom';
import './Header.css'
export default function Header() {
  return (
    <>
        <div className="position-fixed index-99 w-100">
            <div className="d-flex justify-content-between">
                <div style={{ width: '50px' }}>
                    <img src="https://socialshosha.chaak.in/110.png" alt="" />
                </div>
                <div>
                    <ul className="d-flex nav__list">
                        <li className="nav-item p4 ttu slash-light">
                            <NavLink to="/" className="router-link-active router-link-exact-active link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">Homes</span>
                            </NavLink>
                            <i className="nav-item__slash">/</i>
                        </li>
                        <li className="nav-item p4 ttu slash-light">
                            <NavLink to="/work" className="link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">Work</span>
                            </NavLink>
                            <i className="nav-item__slash">/</i>
                        </li>
                        <li className="nav-item p4 ttu slash-light">
                            <NavLink to="/h" className="link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">Entertainment</span>
                            </NavLink>
                            <i className="nav-item__slash">/</i>
                        </li>
                        <li className="nav-item p4 ttu slash-light">
                            <NavLink to="/g" className="link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">About</span>
                            </NavLink>
                            <i className="nav-item__slash">/</i>
                        </li>
                        <li className="nav-item p4 ttu slash-light">
                            <NavLink to="/f" className="link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">Feed</span>
                            </NavLink>
                            <i className="nav-item__slash">/</i>
                        </li>
                        <li className="nav-item p4 ttu slash-light">
                            <NavLink to="/s" className="link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">Podcast</span>
                            </NavLink>
                            <i className="nav-item__slash">/</i>
                        </li>
                        <li className="nav-item p4 ttu slash-light">
                            <NavLink to="/a" className="link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">Contact</span>
                            </NavLink>
                            <i className="nav-item__slash">/</i>
                        </li>
                        <li className="nav-item p4 ttu slash-light">
                            <NavLink to="/d" className="link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">Shop</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Outlet />
    </>
  )
}
