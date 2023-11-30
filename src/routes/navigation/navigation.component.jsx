import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import toast from "react-hot-toast";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext)

  const handleSignOut = async () => {
    
    await signOutUser()
    setCurrentUser(null)
    toast('Good Bye', {
      icon:'👋'
    })
  }
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
            className="px-[10px] py-[15px] cursor-pointer text-xl hover:underline hover:underline-offset-4"
          >
            Shop
          </Link>
          <Link
            id="nav-link"
            to="/contat"
            className="px-[10px] py-[15px] cursor-pointer text-xl hover:underline hover:underline-offset-4"
          >
            Contact
          </Link>
          { currentUser ? (
            <>
              <button onClick={handleSignOut} className="px-[10px] py-[15px] cursor-pointer text-xl bg-red-700 rounded-md">Sign out</button>
              <span className="px-[10px] py-[15px] cursor-pointer text-xl hover:underline-offset-4">{currentUser.email}</span>
            </>
          ): (
          <Link 
            id="nav-link"
            to="/auth"
            className="px-[10px] py-[15px] cursor-pointer text-xl hover:underline hover:underline-offset-4"
          >
            Sign in
          </Link>

          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
