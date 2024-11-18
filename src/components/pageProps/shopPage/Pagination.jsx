import React, { useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { ProductsContext } from "../../Context/ProductContext"; // Import context from where you created it

// Component to display items (products) on the current page
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.id} className="w-full h-[500px]">
            <Product
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              // color={item.color}
              // badge={item.badge}
              description={item.description}
              category = {item.category}
              rate = {item.rating.rate}
            />
          </div>
        ))}
    </>
  );
}

// Main Pagination component
const Pagination = ({ itemsPerPage }) => {
  const { products, loading, error } = useContext(ProductsContext); // Access products from context
  const [itemOffset, setItemOffset] = useState(0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Calculate pagination logic based on fetched products
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Handler for page click
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mdl:gap-4 lg:gap-10">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />
        <p className="text-base font-normal text-lightText">
          Products from {itemOffset + 1} to {endOffset} of {products.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
