import { useState , useEffect } from "react";
import Directory from "/src/components/directory/Directory.component";
import { Outlet } from "react-router-dom";



export const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/src/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
    <div id="home">
    <Outlet/>
      <Directory categories={categories} />
    </div>
    </>
  );
}