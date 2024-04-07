import React, { Suspense } from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "reactstrap";
const Cart = React.lazy(() => import("./Cart"));
const ProductDetail = React.lazy(() => import("./ProductDetail"));
const Home = React.lazy(() => import("./Home"));

const Main = () => {
  return (
    <>
      <NavBar />
      <Suspense
        fallback={
          <div className="EmptCartText">
            {" "}
            <Spinner color="primary"></Spinner>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductDetail/:productId" element={<ProductDetail />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Main;
