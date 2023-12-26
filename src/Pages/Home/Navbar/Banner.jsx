import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/slider2.jpg';
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-14 w-1/3">
              <p className="text-6xl font-bold">Task Management For Every Employee</p>
              <p className="font-semibold">There are To Do List OnGoing Complate</p>
              <div className="flex">
                <Link to='/dashboard' className="btn btn-outline btn-warning">Let's Explore
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;