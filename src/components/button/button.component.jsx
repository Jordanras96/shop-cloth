import PropTypes  from "prop-types"

const ButtonRegular = ({children}) => {
  return (
    <button
    type="submit"
    className="group relative h-12 w-full overflow-hidden rounded-lg bg-white text-sm shadow"
  >
    <div className="absolute inset-0 w-3 bg-black transition-all duration-300 ease-out group-hover:w-full"></div>
    <span className="relative text-black uppercase text-xl group-hover:text-white">
    {children}
    </span>
  </button>
  )
}

const ButtonRegularInvert = ({children}) => {
    return (
        <button
        type="submit"
        className="group relative h-12 w-full overflow-hidden rounded-lg bg-black text-sm shadow"
      >
        <div className="absolute inset-0 w-3 bg-white transition-all duration-300 ease-out group-hover:w-full"></div>
        <span className="relative text-white uppercase text-xl group-hover:text-black">
        {children}
        </span>
      </button>
    )
}

const ButtonAuth = ({children}) => {
    return (
        <button
        type="submit"
        className="group relative h-12 w-full overflow-hidden rounded-lg bg-white text-sm shadow"
      >
        <div className="absolute inset-0 w-3 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></div>
        <span className="relative text-black uppercase text-xl group-hover:text-white">
        {children}
        </span>
      </button>
    )
}


ButtonRegular.propTypes = {
    children: PropTypes.node,
    };
ButtonRegularInvert.propTypes = {
    children: PropTypes.node,
    };
ButtonAuth.propTypes = {
    children: PropTypes.node,
    };



const Button = {
    Regular : ButtonRegular,
    Invert : ButtonRegularInvert,
    Auth : ButtonAuth
}


export default Button