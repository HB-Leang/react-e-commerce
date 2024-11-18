import React, { useContext, useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { ProductsContext } from "../../Context/ProductContext";
// import {
//   bestSellerOne,
//   bestSellerTwo,
//   bestSellerThree,
//   bestSellerFour,
// } from "../../../assets/images/index";

const TopRatedProducts = () => {
  const { products } = useContext(ProductsContext);
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  useEffect(() => {
    const topRated = products
      .toSorted((a, b) => {
        return b.rating.rate - a.rating.rate;
      })
      .slice(0,4);
    setTopRatedProducts(topRated);
  }, [products]);
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Top Rated" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {topRatedProducts &&
          topRatedProducts.map((item) => (
            <Product
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
              category={item.category}
              rate = {item.rating.rate}
            />
          ))}
      </div>
    </div>
  );
};

export default TopRatedProducts;
