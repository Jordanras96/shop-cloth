import PropTypes from "prop-types";
import { useRef } from "react";
import "./flip-transition.css";
import GoogleLogo from "../../svg/GoogleLogo.component copy 3";
import FacebookLogo from "../../svg/FacebookLogo.component";
import GithubLogo from "../../svg/GithubLogo.component copy 2";
import TwitterLogo from "../../svg/TwitterLogo.component copy";
import {
  signInWithGooglePopup,
  createUserProfileDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import Button from "../../button/button.component";

const FrontCard = ({ handleClickFront }) => {
  const frontCardRef = useRef(null);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserProfileDocumentFromAuth(user);
    console.log(user);
    console.log(userDocRef);
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
        <div id="form-front" className="mt-2">
          <div className="relative h-14 w-full min-w-[200px]">
            <input
              type="email"
              name="email"
              placeholder=" "
              className="peer pt-0 mt-0"
            />
            <label className="after:content[' ']">Email</label>
          </div>
          <div className="relative h-14 w-full min-w-[200px]">
            <input
              type="password"
              name="password"
              placeholder=" "
              className="peer"
            />
            <label className="after:content[' ']">Password</label>
          </div>
          <div className="flex flex-col justify-between text-sm pt-14 divide-y-2">
            <div id="up-side" className="pb-5">
              <Button.Regular>Sign in</Button.Regular>
            </div>
            <div id="down-side" className="pt-5 flex justify-between">
              <button className="" onClick={logGoogleUser}>
                <GoogleLogo />
              </button>
              <button className="">
                <FacebookLogo />
              </button>
              <button className="">
                <TwitterLogo />
              </button>
              <button className="">
                <GithubLogo />
              </button>
            </div>
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
