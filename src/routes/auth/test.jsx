import React, { useState, useEffect } from "react";

function Example5() {
  // Premier état
  const [count, setCount] = useState(0);

  // Deuxième état
  const [doubleCount, setDoubleCount] = useState(0);

  // Troisième état
  const [message, setMessage] = useState("");

  // Premier useEffect
  useEffect(() => {
    console.log("Effect 1: Component mounted");

    // Nettoyage lors du démontage du composant
    return () => {
      console.log("Clean up Effect 1");
    };
  }, []);

  // Deuxième useEffect
  useEffect(() => {
    console.log("Effect 2: Count updated");

    // Mise à jour de doubleCount en fonction de count
    setDoubleCount(count * 2);
  }, [count]);

  // Troisième useEffect
  useEffect(() => {
    console.log("Effect 3: Double Count updated");

    // Mise à jour de message en fonction de doubleCount
    setMessage(`Double count is ${doubleCount}`);
  }, [doubleCount]);

  // Quatrième useEffect
  useEffect(() => {
    console.log("Effect 4: Message updated");

    // Effet qui s'exécute lors de chaque mise à jour de message
    // ... peut être utilisé pour déclencher une action supplémentaire
  }, [message]);

  // Cinquième useEffect
  useEffect(() => {
    console.log("Effect 5: Component re-rendered");

    // Effet qui s'exécute à chaque rendu du composant
  });

  // Fonction qui incrémente le compteur
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <p>Message: {message}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default Example5;
