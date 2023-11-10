import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

const Navigation = () => {
  return (
    <>
      <div
        id="navigation"
        className="container mx-auto h-20 w-full flex justify-between my-6 items-center"
      >
        <Link
          id="logo-container"
          to="/"
        >
        <CrwnLogo/>
        </Link>
        <div
          id="nav-link-container"
          className="h-full flex items-center justify-end px-5  font-semibold uppercase"
        >
          <Link
            id="nav-link"
            to="/shop"
            className="px-[10px] py-[15px] cursor-pointer"
          >
            Shop
          </Link>
          <Link
            id="nav-link"
            to="/contat"
            className="px-[10px] py-[15px] cursor-pointer"
          >
            Contact
          </Link>
          <Link 
            id="nav-link"
            to="/signin"
            className="px-[10px] py-[15px] cursor-pointer"
          >
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
