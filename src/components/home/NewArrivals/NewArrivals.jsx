import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import { ProductsContext } from "../../Context/ProductContext";

const NewArrivals = () => {
  const [starProduct, setStarProduct] = useState([]);
  const {products} = useContext(ProductsContext);
  useEffect(()=>{
    const slicedProduct = products.toSpliced(0,14);
    setStarProduct(slicedProduct);
  },[products])


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="Store's Stars" />
      <Slider {...settings}>
        {
          starProduct && starProduct.map((item)=>(
            <div className="w-full h-[500px] px-2">
              <Product
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
              category={item.category}
              rate = {item.rating.rate}
            />
            </div>
          ))
        }
        
      </Slider>
    </div>
  );
};

export default NewArrivals;
