import React, { useEffect, useState } from "react";
import "../components/Products.css";
import Search from "./Search";
import ProductCard from "./ProductCard";
import ProductAccordion from "./ProductAccordion";

function Products(props) {
  const [mode, setMode] = useState("dark");
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("test/api/properties/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
        setStatus(result);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const switchMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <div>
      <div className="container-fluid">
        <div
          className="row"
          style={
            mode === "light"
              ? { backgroundColor: "#f0f0f0" }
              : { backgroundColor: "#121212" }
          }
        >
          <div className="col-lg-9 order-xl-first order-lg-first order-md-last order-sm-last order-last">
            {loading ? (
              <div className="text-center pt-5 mt-5">
                <div className="spinner-border text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              status.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-12 float-start px-2 py-2 mt-3"
                  >
                    <ProductCard item={item} mode={mode} />
                  </div>
                );
              })
            )}
          </div>
          <div
            style={
              mode === "light"
                ? { backgroundColor: "white" }
                : { backgroundColor: "#282828" }
            }
            className="col-lg-3 order-xl-last order-lg-last order-sm-first order-md-first order-xs-first pt-5"
          >
            {/* search burda */}
            <Search result={result} mode={mode} setStatus={setStatus} />

            <div className="form-check form-switch d-flex align-items-center">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onClick={switchMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                {mode === "light" ? (
                  <span className="text-dark fs-3 ms-2">
                    <i style={{ color: "#FC9601" }} className="fas fa-sun"></i>
                  </span>
                ) : (
                  <span className="text-light fs-3 ms-2">
                    <i className="fas fa-moon"></i>
                  </span>
                )}
              </label>
            </div>
            <h2 className="text-info">FILTER</h2>

            <hr />

            <div
              className="row"
              style={
                mode === "light"
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#282828" }
              }
            >
              <ProductAccordion
                mode={mode}
                result={result}
                setStatus={setStatus}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
