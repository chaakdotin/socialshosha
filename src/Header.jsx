import React from 'react'
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
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
                            
                            <Link to="/" className="router-link-active router-link-exact-active link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">Home</span>
                            </Link>
                            <i className="nav-item__slash">/</i>
                        </li>
                        <li className="nav-item p4 ttu slash-light">
                            <Link to="/work" className="link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">Work</span>
                            </Link>
                            <i className="nav-item__slash">/</i>
                        </li>
                        <li className="nav-item p4 ttu slash-light">
                            <Link to="" className="link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">Entertainment</span>
                            </Link>
                            <i className="nav-item__slash">/</i>
                        </li>
                        <li className="nav-item p4 ttu slash-light">
                            <Link to="" className="link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">About</span>
                            </Link>
                            <i className="nav-item__slash">/</i>
                        </li>
                        <li className="nav-item p4 ttu slash-light">
                            <Link to="" className="link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">Feed</span>
                            </Link>
                            <i className="nav-item__slash">/</i>
                        </li>
                        <li className="nav-item p4 ttu slash-light">
                            <Link to="" className="link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">Podcast</span>
                            </Link>
                            <i className="nav-item__slash">/</i>
                        </li>
                        <li className="nav-item p4 ttu slash-light">
                            <Link to="" className="link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">Contact</span>
                            </Link>
                            <i className="nav-item__slash">/</i>
                        </li>
                        <li className="nav-item p4 ttu slash-light">
                            <Link to="" className="link--has-dot link nav-item__link">
                                <span className="dot--15 dot--red dot--filled dot"></span>
                                <span className="text">Shop</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Outlet />
    </>
  )
}
