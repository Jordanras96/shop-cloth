import "./card.css";
import "./flip-transition.css";
import PropTypes from "prop-types";
import FrontCard from "./front-card.component";
import BackCard from "./back-card.component";
import { forwardRef } from "react";

// const Card = forwardRef(function Card(props, ref)) {
//   const {handleClickFront, handleClickBack} = props
//   return (
//     <div
//       ref={ref}
//       id="card"
//       className="h-full w-full transform-style-3d relative select-none cursor-pointer"
//     >
//       <FrontCard handleClickFront={handleClickFront} />
//       <BackCard handleClickBack={handleClickBack} />
//     </div>
//   );
// }

const Card = forwardRef(function Card(props, ref) {
  const { handleClickBack, handleClickFront } = props;
  return (
    <div ref={ref} id="card" className="h-full w-full transform-style-3d relative select-none cursor-pointer">
      <FrontCard handleClickFront={handleClickFront}/>
      <BackCard handleClickBack={handleClickBack}/>
    </div>
  )
});



export default Card;


Card.propTypes = {
  handleClickBack: PropTypes.func,
  handleClickFront: PropTypes.func,
};