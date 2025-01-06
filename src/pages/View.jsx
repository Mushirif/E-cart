import React from "react";
import Header from "../components/Header";

const View = () => {
  return (
    <>
      <Header />
      <div style={{paddingTop:"100px"}} className="flex flex-col mx-5">
        <div className="gird gird-cols-2 items-center h-screen">
          <img
            width={"450px"}
            height={"200px"}
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg"
            alt=""
          />
          <div >
            <h3 className="font-bold">PID: id</h3>
            <h1 className="text-5xl font-bold">Product Name</h1>
            <h4 className="font-bold text-red-600 text-2xl">$250</h4>
            <h4>Brand: brand</h4>
            <h4>Category: category</h4>
            <p>
              <span className="font-bold"> Description:</span>Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Porro a, dolores quia aut
              voluptatibus magnam ratione laboriosam eveniet ipsa doloremque
              magni qui corrupti rerum omnis deserunt nisi. Eveniet,
              necessitatibus sequi?{" "}
            </p>
            <div className="flex justify-between mt-5">
              <button className="bg-blue-600 text-white p-2">Add to Whishlist</button>
              <button className="bg-green-600 text-white p-2">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
