import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { useState } from "react";
const Home = () => {
  const dispatch = useDispatch();

  const { allProducts, loading, errorMsg } = useSelector(
    (state) => state.productReducer
  );
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 8;
  const totalPage = Math.ceil(allProducts?.length / productPerPage);
  const currentPageProductLastIndex = currentPage * productPerPage;
  const currentPageProductFirstIndex =
    currentPageProductLastIndex - productPerPage;
  const visibleAllProducts = allProducts?.slice(
    currentPageProductFirstIndex,
    currentPageProductLastIndex
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const navigateToNextPage = () => {
    if (currentPage != totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const navigateToPrevPage = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: "100px" }} className="px-5">
        {loading ? (
          <div className="flex justify-center items-center my-5 text-lg">
            <img
              height={"80px"}
              width={"80px"}
              src="https://i.gifer.com/ZKZg.gif"
              alt=""
            />
            Loading...
          </div>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-4">
              {allProducts?.length > 0 ? (
                visibleAllProducts?.map((products) => (
                  <div key={products?.id} className="rounded border p-2 shadow">
                    <img
                      width={"100%"}
                      height={"200px"}
                      src={products?.thumbnail}
                      alt=""
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-bold">{products?.title}</h3>
                      <Link
                        to={`/${products?.id}/view`}
                        className="bg-violet-600 rounded mt-3 text-white inline-block p-2"
                      >
                        View More...
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center font-bold text-red-600 my-5 text-lg">
                  Products not found!!!
                </div>
              )}
            </div>
            <div className="text-center text-2xl font-bold mt-20">
              <span onClick={navigateToPrevPage} className="cursor-pointer">
                <i className="fa-solid fa-backward me-5"></i>
              </span>
              <span>
                {currentPage}of{totalPage}
              </span>
              <span onClick={navigateToNextPage} className="cursor-pointer">
                <i className="fa-solid fa-forward ms-5"></i>
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
