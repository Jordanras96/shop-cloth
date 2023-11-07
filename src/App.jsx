import { useState , useEffect } from "react";
import Directory from "./components/directory/Directory";
import "./App.css";


export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/src/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <Directory categories={categories} />
    </>
  );
}