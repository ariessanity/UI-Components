import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "../Styles/Products.scss";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const config = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVyIn0.B1QyKzKxzpxay1__A8B85ij32rqFoOIAFGDqBmqXhvs`,
        },
      };
      try {
        const { data } = await axios.get(
          `https://sw-coding-challenge.herokuapp.com/api/v1/products`,
          config
        );
        setProducts(data.d);
        console.log(data.d);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products">
      <ul>
        {products.slice(0, 3).map((product, index) => {
          return (
            <li key={index}>
              <ProductCard
                img={product.imageUrl}
                name={product.name}
                description={product.description}
                salePrice={product.salePrice}
                originalPrice={product.originalPrice}
                discount={product.percentOff}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
