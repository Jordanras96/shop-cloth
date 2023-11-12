import PropTypes from "prop-types";
import {
  signInWithGooglePopup,
  createUserProfileDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import "./card.css";
import "./flip-transition.css";
import { useRef } from "react";

const FrontCard = ({ handleClickFront }) => {
  const frontCardRef = useRef(null)

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserProfileDocumentFromAuth(user);
  };
  return (
    <div
      ref={frontCardRef}
      id="card-front"
      className="w-full h-full backface-hidden absolute flex justify-center items-center shadow-neoCardBack rounded-3xl bg-gradient-to-l from-white to-[#e6e6e6]"
    >
      <div id="sign-in" className="flex flex-col place-items-stretch">
        <h2 className="text-3xl font-semibold text-center uppercase my-0">
          Sign in
        </h2>
        <span className="text-lg text-slate-400 mt-7 mb-5">
          Stay update on your favorite cloth shop news
        </span>
        <div id="form-front" className="my-2">
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="email"
              name="email"
              placeholder=" "
              className="peer pt-0 mt-0"
            />
            <label className="after:content[' ']">Email</label>
          </div>
          <div className="relative h-11 w-full min-w-[200px] my-2">
            <input
              type="password"
              name="password"
              placeholder=" "
              className="peer"
            />
            <label className="after:content[' ']">Password</label>
          </div>
          <div className="flex justify-between text-sm space-x-5 pt-14 my-2">
            <button className="group relative h-[70px] w-full overflow-hidden rounded-lg bg-white text-sm shadow">
              <div className="absolute inset-0 w-3 bg-black transition-all duration-300 ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white uppercase text-xl">
                Sign in
              </span>
            </button>
            <button
              className="group relative h-[70px] w-full overflow-hidden rounded-lg bg-white text-xl shadow"
              onClick={logGoogleUser}
            >
              <div className="absolute inset-0 w-3 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white uppercase">
                Sign in with google
              </span>
            </button>
          </div>
        </div>
        <span className="text-lg text-slate-400 my-2 cursor-pointer mt-10 text-center">
          New to Shop Cloth ?
          <span
            onClick={handleClickFront}
            className="text-sky-500 underline uppercase pl-2"
          >
            Join now
          </span>
        </span>
      </div>
    </div>
  );
};

FrontCard.propTypes = {
  handleClickFront: PropTypes.func,
};

export default FrontCard;
