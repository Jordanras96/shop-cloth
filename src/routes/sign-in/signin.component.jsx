import FlippableCard from '../../components/flip-card/flippable-card.component'

const Signin = () => {
  return (
    <>
      <div className=" flex items-center justify-center">
        {/* <div id="sign-in" className="">
          <h2 className="text-xl font-semibold text-center">
            I already have an account
          </h2>
          <span className="text-lg mt-5">
            Sign in with your email and password
          </span>
          <form action="#" method="post">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="email"
                name="email"
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
            <div className="flex justify-between text-sm space-x-5">
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
        </div> */}
        {/* <div id="sign-up" className="">
          <h2 className="text-xl font-semibold text-center">
            I do not have an account
          </h2>
          <span className="text-lg mt-5">
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
            <button
              type="submit"
              className="group relative h-12 w-full overflow-hidden rounded-lg bg-white text-sm shadow"
            >
              <div className="absolute inset-0 w-3 bg-black transition-all duration-500 ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white uppercase">
                Sign up
              </span>
            </button>
          </form>
        </div> */}
      <FlippableCard/>
      </div>
    </>
  );
};

export default Signin;
