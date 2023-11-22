import PropTypes from "prop-types";
import { useRef, useState } from "react";
import "./flip-transition.css";
import GoogleLogo from "../svg/GoogleLogo.component copy 3";
import FacebookLogo from "../svg/FacebookLogo.component";
import GithubLogo from "../svg/GithubLogo.component copy 2";
import TwitterLogo from "../svg/TwitterLogo.component copy";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserProfileDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const FrontCard = ({ handleClickFront }) => {
  const frontCardRef = useRef(null);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
      alert("login succes");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("Invalid Email");
          break;
        case "auth/user-disabled":
          alert("Account disabled");
          break;
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        default:
          console.log(error);
      }
    }

    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
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
        <form id="form-front" className="mt-2" onSubmit={handleSubmit}>
          <div className="relative h-14 w-full min-w-[200px]">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder=" "
              className="peer pt-0 mt-0"
              required
            />
            <label className="after:content[' ']">Email</label>
          </div>
          <div className="relative h-14 w-full min-w-[200px]">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder=" "
              className="peer"
              required
            />
            <label className="after:content[' ']">Password</label>
          </div>
          <div className="flex flex-col justify-between text-sm pt-14 divide-y-2">
            <div id="up-side" className="pb-5">
              <Button.Regular>Sign in</Button.Regular>
            </div>
            <div id="down-side" className="pt-5 flex justify-between">
              <button type="button" onClick={logGoogleUser}>
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
        </form>
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
