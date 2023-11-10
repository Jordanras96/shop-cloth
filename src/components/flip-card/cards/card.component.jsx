import "./card.css";
import "./flip-transition.css";
import PropTypes from "prop-types";

function Card({ onClick }) {
  return (
    <div
      id="card"
      className="h-full w-full transform-style-3d relative   select-none cursor-pointer"
      onClick={onClick}
    >
      <div
        id="card-back"
        className="w-full h-full backface-hidden absolute flex justify-center items-center shadow-neoCardFront rounded-3xl bg-gradient-to-r from-white to-[#e6e6e6] rotate-y-180"
      >
        <div id="sign-up" className="flex flex-col place-items-stretch">
          <h2 className="text-3xl font-semibold text-center uppercase">
            Sign up
          </h2>
          <span className="text-lg text-slate-400">
            Sign up with your email and password
          </span>
          <form action="#" method="post">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="text"
                name="Display Name"
                placeholder=" "
                className="peer"
              />
              <label className="after:content[' ']">Display Name</label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="email"
                name="Email"
                placeholder=" "
                className="peer"
              />
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
            <div className="flex justify-between text-sm pt-14">

            <button
              type="submit"
              className="group relative h-12 w-full overflow-hidden rounded-lg bg-white text-sm shadow"
            >
              <div className="absolute inset-0 w-3 bg-black transition-all duration-500 ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white uppercase">
                Sign up
              </span>
            </button>
            </div>
          </form>
        </div>
      </div>
      <div
        id="card-front"
        className="w-full h-full backface-hidden absolute flex justify-center items-center shadow-neoCardBack rounded-3xl bg-gradient-to-l from-white to-[#e6e6e6]"
      >
        <div id="sign-in" className="flex flex-col place-items-stretch">
          <h2 className="text-3xl font-semibold text-center uppercase my-2">
            Sign in
          </h2>
          <span className="text-lg text-slate-400 my-2">
            Sign in with your email and password
          </span>
          <form action="#" method="post" className="my-2">
            <div className="relative w-full min-w-[200px] my-2">
              <input
                type="email"
                name="email"
                placeholder=" "
                className="peer"
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
              <button
                type="submit"
                className="group relative h-12 w-1/2 overflow-hidden rounded-lg bg-white text-sm shadow"
              >
                <div className="absolute inset-0 w-3 bg-black transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white uppercase">
                  Sign in
                </span>
              </button>
              <button
                type="submit"
                className="group relative h-12 w-1/2 overflow-hidden rounded-lg bg-white text-sm shadow"
              >
                <div className="absolute inset-0 w-3 bg-blue-500 transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white uppercase">
                  Sign in with google
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  onClick: PropTypes.func,
};

export default Card;
