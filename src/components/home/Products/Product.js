import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    console.log("productItem", productItem)
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };
  return (
    <div className="w-full h-full relative group">
      <div className="max-w-80 h-3/4 relative content-center overflow-y-hidden ">
        <div className="h-full flex items-center">
          <Image className="w-full h-4/5 object-scale-down" imgSrc={props.image} />
        </div>
        <div className="absolute top-6 left-8">
          {props.badge && <Badge text="New" />}
        </div>
        <div className="w-full h-16 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            {/* <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Compare
              <span>
                <GiReturnArrow />
              </span>
            </li> */}
            <li
              onClick={() =>
                dispatch(
                  addToCart({
                    id: props.id,
                    name: props.title,
                    quantity: 1,
                    image: props.image,
                    // badge: props.badge,
                    price: props.price,
                    // colors: props.color,
                  })
                )
              }
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li
              onClick={handleProductDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
            {/* <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="max-w-80 h-24 py-6 flex flex-column gap-1 border-[1px] border-t-0 px-4">
        <div className="w-full flex items-center justify-between font-titleFont">
          <h2 className="text-base text-primeColor font-bold line-clamp-2 overflow-hidden text-ellipsis">
            {props.title}
          </h2>
          <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>
        {/* <div>
          <p className="text-[#767676] text-[14px]">{props.color}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
