import React from 'react'
import Container from '../../../Components/Shared/Container/Container'
import logo from "../../../assets/images/log.jpg";

const Navbar = () => {
  return (
    <Container>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Dashboard</a></li>
            </ul>
          </div>
          <div className="-mt-4">
            <img src={logo} alt="" className='h-[45px]' />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className='font-semibold'>Home</a></li>
            <li><a className='font-semibold'>about</a></li>
            <li><a className='font-semibold'>Dashboard</a></li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Navbar
