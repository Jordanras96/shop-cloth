import PropTypes from 'prop-types'
import { CategoryItem } from "../category-item/category-item.component"

const CategoryMenu = ({categories}) => {
  return (
    <div
        id="categories-container"
        className="w-full flex flex-wrap justify-between "
      >
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
  )
}

CategoryMenu.propTypes = {
    categories: PropTypes.any
}

export default CategoryMenu