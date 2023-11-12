import "./flippable-card.css";
import Card from "./cards/card.component";
import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";

function FlippableCard() {
  const [showFront, setShowFront] = useState(true);

  const nodeRef = useRef(null);

  const handleClickFront = () => {
    setShowFront(false);
  };

  const handleClickBack = () => {
    setShowFront(true);
  };
  return (
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
        <Card
          ref={nodeRef}
         
          handleClickFront={handleClickFront}
          handleClickBack={handleClickBack}
        />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;
