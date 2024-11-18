import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { FaStar } from "react-icons/fa";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.title}</h2>
      <p className="text-xl font-semibold">${productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.description}</p>
      {/* <p className="text-sm">Be the first to leave a review.</p> */}
      {/* <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p> */}
      <button
        onClick={() =>
          dispatch(
            addToCart({
              id: productInfo.id,
              name: productInfo.title,
              quantity: 1,
              image: productInfo.image,
              price: productInfo.price,
            })
          )
        }
        className="w-3/5 py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> {String(productInfo.category).toUpperCase()}
      </p>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Rate:</span> {productInfo.rate} <FaStar className="inline-block text-orange-600 align-text-top"/>
      </p>
    </div>
  );
};

export default ProductInfo;
