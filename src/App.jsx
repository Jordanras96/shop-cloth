import { useState } from "react";
import "./App.css";
import CategoryMenu from "./components/category-menu/category-menu.component";
import { useEffect } from "react";

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/src/components/category-menu/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <CategoryMenu categories={categories} />
    </>
  );
}