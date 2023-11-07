import PropTypes from "prop-types";

export const CategoryItem = ({ title, imageUrl, large }) => {
  return (
    <>
      <div
        id={`category-container`}
        className={`min-w-[30%] h-[240px] flex-auto flex items-center justify-center border border-solid border-black mt-0 mx-[7.5px] mb-[15px] overflow-hidden group group-hover:cursor-pointer ${
          large ? "h-[380px]" : ""
        }`}
      >
        <div
          id="background-image"
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 group-hover:ease-in"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div
          id="category-body-container"
          className="h-[90px] px-[25px] py-[25px] flex flex-col items-center justify-center border border-solid border-black bg-white opacity-70 absolute group-hover:opacity-90"
        >
          <h2 className="font-bold mt-0 mx-[6px] mb-0 text-[22px] text-[#4a4a4a] capitalize">
            {title}
          </h2>
          <p className="font-extralight text-[16px] uppercase">Shop Now</p>
        </div>
      </div>
    </>
  );
};

CategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  large: PropTypes.bool.isRequired,
};
