import { useRef } from "react";
import "./card.css";
import "./flip-transition.css";
import PropTypes from "prop-types";

const BackCard = ({ handleClickBack }) => {
  const BackCardRef = useRef(null)

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
        <div id="form-back">
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="text"
              name="Display Name"
              placeholder=" "
              className="peer pt-0 mt-0"
            />
            <label className="after:content[' ']">Display Name</label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input type="email" name="Email" placeholder=" " className="peer" />
            <label className="after:content[' ']">Email</label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="password"
              name="password"
              placeholder=" "
              className="peer"
            />
            <label className="after:content[' ']">Password</label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="password"
              name="Confirm password"
              placeholder=" "
              className="peer"
            />
            <label className="after:content[' ']">Confirm Password</label>
          </div>
          <div className="flex justify-between text-sm pt-10">
            <button
              className="group relative h-12 w-full overflow-hidden rounded-lg bg-white text-sm shadow"
            >
              <div className="absolute inset-0 w-3 bg-black transition-all duration-300 ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white uppercase text-xl">
                Join now
              </span>
            </button>
          </div>
        </div>
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
