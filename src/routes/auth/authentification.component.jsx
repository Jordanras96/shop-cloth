import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";
import FrontCard from "../../components/sign-in-up/sign-in-front-card.component";
import BackCard from "../../components/sign-in-up/sign-up-back-card.component";

const Authentification = () => {
  const [showFront, setShowFront] = useState(true);

  const nodeRef = useRef(null);

  const handleClickFront = () => {
    setShowFront(false);
  };

  const handleClickBack = () => {
    setShowFront(true);
  };
  return (
    <>
      <div className=" flex items-center justify-center">
        <div
          id="FlippableCard"
          className="sm:h-[500px] sm:w-[300px] md:h-[600px] md:w-[450px] lg: xl:h-[600px] xl:w-[400px] perspective-1000"
        >
          <CSSTransition
            nodeRef={nodeRef}
            in={showFront}
            timeout={300}
            classNames="flip"
          >
            <div
              ref={nodeRef}
              id="card"
              className="h-full w-full transform-style-3d relative "
            >
              <FrontCard handleClickFront={handleClickFront} />
              <BackCard handleClickBack={handleClickBack} />
            </div>
          </CSSTransition>
        </div>
      </div>
    </>
  );
};

export default Authentification;
