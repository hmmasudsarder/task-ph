import React from 'react';
import logo from "../../assets/images/log.jpg";
import { FaFacebook, FaGithub } from 'react-icons/fa';



const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-blue-700 text-neutral-content">
        <aside>
          <img className='w-20 h-20 -mt-6 bg-blue-700' src={logo} alt='logo' />
          <p className='text-4xl -mt-9 font-bold text-black'>TASK</p>
          <p>ACME Industries Ltd.<br />Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <div className="flex-col">
              <a href="" className='flex text-xl gap-1 items-center'>
                <FaFacebook /> <p>FACEBOOK</p>
              </a>
            </div>
            <br /> <br />
            <div className="flex-col">
              <a href="" className='flex text-xl gap-1 items-center'>
                <FaGithub /> <p>GITHUB</p>
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  )
}

export default Footer
