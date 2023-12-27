import Container from '../../../Components/Shared/Container/Container'
import { useContext } from "react";
import logo from "../../../assets/images/log.jpg";
import disPic from '../../../assets/images/user.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from "../../../Authentication/AuthProvider";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const emailUs = (user?.email);
  const userName = (user?.displayName);
  const displayPic = (user?.photoURL);
  const navLinks = (
    <>
      <li className="font-semibold uppercase">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold uppercase">
        <NavLink to="/add">Add Products</NavLink>
      </li>
      <li className="font-semibold uppercase">
        {/* <NavLink to="">My Cart</NavLink> */}
      </li>
      <li className="font-semibold uppercase">
        {
          user ? <NavLink to="/dashboard">Dashboard</NavLink> : <NavLink to="/login">Login</NavLink>
        }
      </li>

    </>
  );


  const handleSignOut = () => {
    userLogOut()
      .then()
      .catch()
  }

  return (
    <Container>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <Link to='/' className="normal-case text-xl">
              <img className="w-[55px]" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">

                {
                  user?.photoURL ? <img src={displayPic} /> : <img src={disPic} />

                }

              </div>
            </label>
            {
              user?.email ? <p>{emailUs}</p> : user?.displayName && <p>{userName}</p>
            }

            {user ? <button onClick={handleSignOut} className="btn">Sign Out</button> : <Link to='/login'><button></button></Link>}

          </div>
        </div>
      </div>
    </Container>
  )
}

export default Navbar
