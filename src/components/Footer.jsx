import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div
        style={{ height: "250px", marginTop: "100px" }}
        className="mt-5 w-full bg-violet-600 text-white p-4"
      >
        <div className="flex justify-between p-4">
          <div style={{ width: "400px" }} className="intro">
            <h5 className="text-xl font-bold">
              <i className="fa-solid fa-truck-fast me-2"></i> E Cart
            </h5>
            <p>
              Designed and built with all the love in the world by the Bootstrap
              team with the help of our contributors.
            </p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
          </div>
          <div style={{ width: "200px" }} className="flex flex-col">
            <h5 className="font-bold">Links</h5>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Landing page
            </Link>
            <Link
              to={"/home"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Home page
            </Link>
            <Link
              to={"/history"}
              style={{ textDecoration: "none", color: "white" }}
            >
              History page
            </Link>
          </div>
          <div style={{ width: "200px" }} className="flex flex-col">
            <h className="font-bold">Guides</h>
            <a
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              href="https://react.dev/"
            >
              React
            </a>
            <a
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              href="https://react-bootstrap.netlify.app/"
            >
              React Bootstrap
            </a>
            <a
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              href="https://reactrouter.com/"
            >
              React Router
            </a>
          </div>
          <div style={{ width: "300px" }} className="flex flex-col">
            <h5 className="font-bold">Contacts Us</h5>
            <div className="flex">
              <input
                style={{width:"250px"}}
                type="text"
                placeholder="Enter your Email here..."
                className="rounded p-1"
              />
              <button className="btn btn-info ms-2">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="icons flex justify-between mt-3 p-4">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://en.wikipedia.org/wiki/Twitter"
                target="_blank"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://en.wikipedia.org/wiki/Instagram"
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://en.wikipedia.org/wiki/LinkedIn"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://www.youtube.com/"
                target="_blank"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://www.youtube.com/"
                target="_blank"
              >
                <i class="fa-solid fa-phone"></i>
              </a>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://en.wikipedia.org/wiki/GitHub"
                target="_blank"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </>
  );
};

export default Footer;
