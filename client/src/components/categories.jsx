
import { categories } from "../data";
import "../styles/Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h1>Explore the categories</h1>
      <p>
        Explore our wide range of rentals that cater to all types of travelers.
        Immerse yourself in the local culture. enjoy the comfort of home, and
        create unforgettable memories in your dream destination.
      </p>
      <div className="categories_list">
        {categories?.slice(1, 8).map((Category, index) => (
          <Link to={`/properties/category/${Category.label}`}>
            <div className="category" key={index}>
              <img src={Category.img} alt={Category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon"></div>
                <p>{Category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
