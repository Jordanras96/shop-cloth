import { useRef, useState } from "react";

import "./flip-transition.css";

import PropTypes from "prop-types";
import {
  createAuthUserWithEmailAndPassword,
  createUserProfileDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import Button from "../../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const BackCard = ({ handleClickBack }) => {
  const BackCardRef = useRef(null);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocumentFromAuth(user, { displayName });
      alert("create with succes");
      resetFormField;
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log("user creation encountered an error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div
      ref={BackCardRef}
      id="card-back"
      className="w-full h-full backface-hidden absolute flex justify-center items-center shadow-neoCardFront rounded-3xl bg-gradient-to-r from-white to-[#e6e6e6] rotate-y-180"
    >
      <div id="sign-up" className="flex flex-col place-items-stretch">
        <h2 className="text-3xl font-semibold text-center uppercase">
          Join us
        </h2>
        <span className="text-md text-slate-400 text-center mb-5">
          By clicking Join now, you agree to Shop Cloths <br />{" "}
          <span className="font-bold"> User Agreement Privacy Policy, </span>{" "}
          <br />
        </span>
        <form id="form-back" onSubmit={handleSubmit}>
          <div className="relative h-14 w-full min-w-[200px]">
            <input
              required
              type="text"
              name="displayName"
              value={displayName}
              onChange={handleChange}
              placeholder=" "
              className="peer pt-0 mt-0"
            />
            <label className="after:content[' ']">Display Name</label>
          </div>
          <div className="relative h-14 w-full min-w-[200px]">
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder=" "
              className="peer"
            />
            <label className="after:content[' ']">Email</label>
          </div>
          <div className="relative h-14 w-full min-w-[200px]">
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder=" "
              className="peer"
            />
            <label className="after:content[' ']">Password</label>
          </div>
          <div className="relative h-14 w-full min-w-[200px]">
            <input
              required
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              placeholder=" "
              className="peer"
            />
            <label className="after:content[' ']">Confirm Password</label>
          </div>
          <div className="flex justify-between text-sm pt-10">
            <Button.Invert>Join us</Button.Invert>
          </div>
        </form>
        <span className="text-lg text-slate-400 my-2 cursor-pointer mt-5 text-center">
          Already on Shop Cloth?
          <span
            onClick={handleClickBack}
            className="text-sky-500 underline uppercase pl-2"
          >
            Sign in
          </span>
        </span>
      </div>
    </div>
  );
};

BackCard.propTypes = {
  handleClickBack: PropTypes.func,
};

export default BackCard;
