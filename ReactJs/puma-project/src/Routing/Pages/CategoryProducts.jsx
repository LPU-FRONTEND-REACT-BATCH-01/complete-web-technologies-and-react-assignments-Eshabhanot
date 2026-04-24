import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>

      {products.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>₹{item.price}</p>

          {/* ✅ View More Button */}
          <Link to={`${item.id}`}>
            <button>View More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryProducts;