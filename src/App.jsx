import "./App.css";
import { CategoryItem } from "./components/category-item/category-item.component";

export default function App() {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      large: false,
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      large: false,
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      large: false,
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      large: true,
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      large: true,
    },
  ];

  return (
    <div
      id="categories-container"
      className="w-full flex flex-wrap justify-between "
    >
      {categories.map((category) => ( 
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
  );
}
