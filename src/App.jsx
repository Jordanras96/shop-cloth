import "./App.css";

export default function App() {
  return (
    <>
      <div id="nav">
        <h1 className="text-center bg-red-400">It's navbar</h1>
      </div>

      <div id="general-container" className="container mx-auto w-full">
        <div className="flex justify-around space-x-2 mt-5 mb-2">
          <div className="w-1/3 card-zoom">
            <img src="/public/joshua-hanson-e616t35Vbeg-unsplash.jpg" className="object-cover card-zoom-image"/>
            <div className="card-zoom-text">
              <h2>hats</h2>
              <p>shop now</p>
            </div>
            
          </div>

          <div className="w-1/3 card-zoom">
          <img src="/public/joshua-hanson-e616t35Vbeg-unsplash.jpg" className="object-cover card-zoom-image"/>
            <div className="card-zoom-text">
              <h2>jackets</h2>
              <p>shop now</p>
            </div>
          </div>
          <div className="w-1/3 card-zoom">
          <img src="/public/joshua-hanson-e616t35Vbeg-unsplash.jpg" className="object-cover card-zoom-image"/>
            <div className="card-zoom-text">
              <h2>sneakers</h2>
              <p>shop now</p>
            </div>
          </div>
        </div>
        <div className="flex justify-around space-x-2 my-1">
          <div className="w-1/2 card-zoom">
          <img src="/public/joshua-hanson-e616t35Vbeg-unsplash.jpg" className="object-cover card-zoom-image"/>
            <div className="card-zoom-text">
              <h2>womens</h2>
              <p>shop now</p>
            </div>
          </div>
          <div className="w-1/2 card-zoom">
          <img src="/public/joshua-hanson-e616t35Vbeg-unsplash.jpg" className="object-cover w-full h-full card-zoom-image"/>
            <div className="card-zoom-text">
              <h2>mens</h2>
              <p>shop now</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
