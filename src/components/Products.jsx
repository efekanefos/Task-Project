import React, { useEffect, useState } from "react";
import "../components/Products.css";
import bed1apt from "../property_thumbs/1-bed-apt/i1.jpg";
import bed1smart from "../property_thumbs/1-bed-smart/i1.jpg";
import bed2apt from "../property_thumbs/2-bed-apt/i1.jpg";
import bed2ph from "../property_thumbs/2-bed-ph/i1.jpg";
import bed2smart from "../property_thumbs/2-bed-smart/i1.jpg";
import bed3apt from "../property_thumbs/3-bed-apt/i1.jpg";
import bed3ph from "../property_thumbs/3-bed-ph/i1.jpg";
import bed3pool from "../property_thumbs/3-bed-pool/i1.jpg";
import studio from "../property_thumbs/studio/i1.jpg";

function Products() {
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://wizio.co.uk/test/api/properties/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
        setStatus(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  let Available = result.filter((item) => item.status_id === 1);
  //console.log(Available);
  let Reserved = result.filter((item) => item.status_id === 2);
  //console.log(Reserved);
  let Sold = result.filter((item) => item.status_id === 3);
  let NotReleased = result.filter((item) => item.status_id === 4);

  let onAvailable = () => {
    setStatus(Available);
  };

  let onReserved = () => {
    setStatus(Reserved);
  };
  let onSold = () => {
    setStatus(Sold);
  };
  let onNotReleased = () => {
    setStatus(NotReleased);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 order-xl-first order-lg-first order-md-last order-sm-last order-last productBg">
            {status.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-12 float-start px-0 py-2 mt-3"
                >
                  <div className="card">
                    {item.room_type.label === "3 Bed Pool" ? (
                      <img src={bed3pool} className="card-img-top" alt="..." />
                    ) : item.room_type.label === "1 Bed Smart" ? (
                      <img src={bed1smart} className="card-img-top" alt="..." />
                    ) : item.room_type.label === "1 Bed Apt" ? (
                      <img src={bed1apt} className="card-img-top" alt="..." />
                    ) : item.room_type.label === "Studio" ? (
                      <img src={studio} className="card-img-top" alt="..." />
                    ) : item.room_type.label === "3 Bed PH" ? (
                      <img src={bed3ph} className="card-img-top" alt="..." />
                    ) : item.room_type.label === "3 Bed Apt" ? (
                      <img src={bed3apt} className="card-img-top" alt="..." />
                    ) : item.room_type.label === "2 Bed Apt" ? (
                      <img src={bed2apt} className="card-img-top" alt="..." />
                    ) : item.room_type.label === "2 Bed PH" ? (
                      <img src={bed2ph} className="card-img-top" alt="..." />
                    ) : item.room_type.label === "2 Bed Smart" ? (
                      <img src={bed2smart} className="card-img-top" alt="..." />
                    ) : (
                      ""
                    )}

                    <div className="card-body">
                      <h5 className="card-title text-info ">
                        {item.code}
                        {item.status_id === 1 ? (
                          <span className="badge rounded-pill bg-success border-0 ms-3">
                            Available
                          </span>
                        ) : item.status_id === 2 ? (
                          <button className="badge rounded-pill bg-danger border-0 ms-3">
                            Reserved
                          </button>
                        ) : item.status_id === 3 ? (
                          <button className="badge rounded-pill bg-dark border-0 ms-3">
                            Sold
                          </button>
                        ) : item.status_id === 4 ? (
                          <button className="badge rounded-pill bg-info border-0 ms-3 text-white">
                            Not Released
                          </button>
                        ) : (
                          ""
                        )}
                      </h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        FLOOR TYPE {item.room_type.label}
                      </li>
                      <li className="list-group-item">
                        INTERNAL {item.net_area}
                      </li>
                      <li className="list-group-item">
                        EXTERNAL {item.out_area}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-3 order-xl-last order-lg-last order-sm-first order-md-first order-xs-first pt-5 bg-white">
            <h2 className="text-info">FILTER</h2>
            <hr />
            <h5 className="text-info">Status</h5>
            <div className="row">
              <div className="col-6">
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-info"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onClick={onAvailable}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Available
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-info"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onClick={onReserved}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Reserved
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-check">
                  <input
                    className="form-check-input border-info"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onClick={onSold}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Sold
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input border-info"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onClick={onNotReleased}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Not Released
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

/*
var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://wizio.co.uk/test/api/properties/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.header("Access-Control-Allow-Origin", "*");
      result.header("Access-Control-Allow-Methods", "GET");
        setResult(result);
        setStatus(result);
      })
      .catch((error) => console.log("error", error));
*/

/*
fetch("url").then(async response => {
      try {
       const data = await response.json()
       console.log('response data?', data)
     } catch(error) {
       console.log('Error happened here!')
       console.error(error)
     }
    })
*/
/*
var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("/test/api/properties/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
        setStatus(result);
      })
      .catch((error) => console.log("error", error));
*/
