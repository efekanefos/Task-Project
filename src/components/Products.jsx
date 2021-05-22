import React, { useEffect, useState } from "react";
import "../components/Products.css";
import bed1apt from "../property_thumbs/1-bed-apt/i1.jpg";
import bed2apt from "../property_thumbs/2-bed-apt/i1.jpg";
import bed3apt from "../property_thumbs/3-bed-apt/i1.jpg";
import bed1smart from "../property_thumbs/1-bed-smart/i1.jpg";
import bed2smart from "../property_thumbs/2-bed-smart/i1.jpg";
import bed2ph from "../property_thumbs/2-bed-ph/i1.jpg";
import bed3ph from "../property_thumbs/3-bed-ph/i1.jpg";
import bed3pool from "../property_thumbs/3-bed-pool/i1.jpg";
import studio from "../property_thumbs/studio/i1.jpg";

function Products() {
  const [itemLimit, setItemLimit] = useState(4);
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

  /*
  Filtering by Status ID Start
  */
  let Available = result.filter((item) => item.status_id === 1);
  let Reserved = result.filter((item) => item.status_id === 2);
  let Sold = result.filter((item) => item.status_id === 3);
  let NotReleased = result.filter((item) => item.status_id === 4);
  /*
  Filtering by Status ID End
  */
  /*
  Status onClick Functions Start 
 */
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
  /*
  Status onClick Functions End 
 */
  /*
  Filtering by RoomType Start
  */
  let oneBedApt = result.filter((item) => item.room_type.label === "1 Bed Apt");
  let twoBedApt = result.filter((item) => item.room_type.label === "2 Bed Apt");
  let threeBedApt = result.filter(
    (item) => item.room_type.label === "3 Bed Apt"
  );
  let oneBedSmart = result.filter(
    (item) => item.room_type.label === "1 Bed Smart"
  );
  let twoBedSmart = result.filter(
    (item) => item.room_type.label === "2 Bed Smart"
  );
  let oneBedPh = result.filter((item) => item.room_type.label === "1 Bed PH");
  let twoBedPh = result.filter((item) => item.room_type.label === "2 Bed PH");
  let threeBedPool = result.filter(
    (item) => item.room_type.label === "3 Bed Pool"
  );
  let studioFilter = result.filter((item) => item.room_type.label === "Studio");
  /*
  Filtering by RoomType End
  */
  let on1BedApt = () => {
    setStatus(oneBedApt.splice(0, itemLimit));
  };
  let on2BedApt = () => {
    setStatus(twoBedApt);
  };
  let on3BedApt = () => {
    setStatus(threeBedApt);
  };
  let on1BedSmart = () => {
    setStatus(oneBedSmart);
  };
  let on2BedSmart = () => {
    setStatus(twoBedSmart);
  };
  let on1Bedph = () => {
    setStatus(oneBedPh);
  };
  let on2Bedph = () => {
    setStatus(twoBedPh);
  };
  let on3BedPool = () => {
    setStatus(threeBedPool);
  };
  let onStudio = () => {
    setStatus(studioFilter);
  };

  useEffect(() => {
    console.log(itemLimit);
    setStatus(oneBedApt.splice(0, itemLimit));
  }, [itemLimit]);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 order-xl-first order-lg-first order-md-last order-sm-last order-last productBg">
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
                    <div className="card" id="hoverCard">
                      {item.room_type.label === "3 Bed Pool" ? (
                        <img
                          src={bed3pool}
                          className="card-img-top"
                          alt="..."
                        />
                      ) : item.room_type.label === "1 Bed Smart" ? (
                        <img
                          src={bed1smart}
                          className="card-img-top"
                          alt="..."
                        />
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
                        <img
                          src={bed2smart}
                          className="card-img-top"
                          alt="..."
                        />
                      ) : (
                        ""
                      )}

                      <div className="card-body d-flex justify-content-center align-items-center py-0 pt-2">
                        <h5 className="card-title text-info ">{item.code}</h5>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <small>
                            FLOOR TYPE
                            <span className="float-end">
                              {item.room_type.label}
                            </span>
                          </small>
                        </li>
                        <div id="afterHover">
                          <li className="list-group-item">
                            <small>
                              INTERNAL
                              <span className="float-end">{item.net_area}</span>
                            </small>
                          </li>
                          <li className="list-group-item">
                            <small>
                              EXTERNAL
                              <span className="float-end">{item.out_area}</span>
                            </small>
                          </li>
                          <li className="list-group-item">
                            <small>
                              GROSS
                              <span className="float-end">
                                {item.gross_area}
                              </span>
                            </small>
                          </li>
                          <li className="list-group-item">
                            <small>
                              POOL
                              <span className="float-end">
                                {item.pool_area}
                              </span>
                            </small>
                          </li>
                          <li className="list-group-item">
                            <small>
                              ROOF
                              <span className="float-end">
                                {item.roof_area}
                              </span>
                            </small>
                          </li>
                        </div>

                        {item.status_id === 1 ? (
                          <li className="list-group-item text-center px-0 text-white bg-success">
                            <span>Available</span>
                          </li>
                        ) : item.status_id === 2 ? (
                          <li className="list-group-item text-center px-0 text-white bg-danger">
                            <span>Reserved</span>
                          </li>
                        ) : item.status_id === 3 ? (
                          <li className="list-group-item text-center px-0 text-white bg-dark">
                            <span>Sold</span>
                          </li>
                        ) : item.status_id === 4 ? (
                          <li className="list-group-item text-center px-0 text-white bg-info">
                            <span>Not Released</span>
                          </li>
                        ) : (
                          ""
                        )}
                      </ul>
                    </div>
                  </div>
                );
              })
            )}
            {loading ? (
              ""
            ) : (
              <button
                onClick={() => {
                  setItemLimit(itemLimit + 4);
                }}
                className="btn btn-danger d-block mx-auto"
              >
                Daha Fazla Göster
              </button>
            )}
          </div>
          <div className="col-lg-3 order-xl-last order-lg-last order-sm-first order-md-first order-xs-first pt-5 bg-white">
            <h2 className="text-info">FILTER</h2>
            <hr />

            <div className="row">
              {/* Accordion Start */}
              <div className="accordion" id="accordionExample1">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h5 className="text-info">Status</h5>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
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
                                id="flexRadioDefault2"
                                onClick={onReserved}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault2"
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
                              id="flexRadioDefault3"
                              onClick={onSold}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault3"
                            >
                              Sold
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input border-info"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault4"
                              onClick={onNotReleased}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault4"
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
              {/* first accordion end*/}
              {/* second accordion start*/}
              <div className="accordion mt-3" id="accordionExample2">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <h5 className="text-info">Room Type</h5>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-6">
                          <div>
                            <div className="form-check">
                              <input
                                className="form-check-input border-info"
                                type="radio"
                                name="flexRadioDefault"
                                id="1BedApt"
                                onClick={on1BedApt}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="1BedApt"
                              >
                                1BedApt
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input border-info"
                                type="radio"
                                name="flexRadioDefault"
                                id="2BedApt"
                                onClick={on2BedApt}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="2BedApt"
                              >
                                2BedApt
                              </label>
                            </div>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input border-info"
                              type="radio"
                              name="flexRadioDefault"
                              id="3BedApt"
                              onClick={on3BedApt}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="3BedApt"
                            >
                              3BedApt
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input border-info"
                              type="radio"
                              name="flexRadioDefault"
                              id="1BedSmart"
                              onClick={on1BedSmart}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="1BedSmart"
                            >
                              1BedSmart
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input border-info"
                              type="radio"
                              name="flexRadioDefault"
                              id="2BedSmart"
                              onClick={on2BedSmart}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="2BedSmart"
                            >
                              2BedSmart
                            </label>
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="form-check">
                            <input
                              className="form-check-input border-info"
                              type="radio"
                              name="flexRadioDefault"
                              id="1Bedph"
                              onClick={on1Bedph}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="1Bedph"
                            >
                              1Bedph
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input border-info"
                              type="radio"
                              name="flexRadioDefault"
                              id="2Bedph"
                              onClick={on2Bedph}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="2Bedph"
                            >
                              2Bedph
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input border-info"
                              type="radio"
                              name="flexRadioDefault"
                              id="3BedPool"
                              onClick={on3BedPool}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="3BedPool"
                            >
                              3BedPool
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input border-info"
                              type="radio"
                              name="flexRadioDefault"
                              id="Studio"
                              onClick={onStudio}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="Studio"
                            >
                              Studio
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* second accordion end*/}
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
/*
{status.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-12 float-start px-2 py-2 mt-3"
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

                    <div className="card-body d-flex justify-content-center align-items-center py-0 pt-2">
                      <h5 className="card-title text-info ">{item.code}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <small>
                          FLOOR TYPE
                          <span className="float-end">
                            {item.room_type.label}
                          </span>
                        </small>
                      </li>
                      <li className="list-group-item">
                        <small>
                          INTERNAL
                          <span className="float-end">{item.net_area}</span>
                        </small>
                      </li>
                      <li className="list-group-item">
                        <small>
                          EXTERNAL
                          <span className="float-end">{item.out_area}</span>
                        </small>
                      </li>
                      <li className="list-group-item">
                        <small>
                          GROSS
                          <span className="float-end">{item.gross_area}</span>
                        </small>
                      </li>
                      <li className="list-group-item">
                        <small>
                          POOL
                          <span className="float-end">{item.pool_area}</span>
                        </small>
                      </li>
                      <li className="list-group-item">
                        <small>
                          ROOF
                          <span className="float-end">{item.roof_area}</span>
                        </small>
                      </li>

                      {item.status_id === 1 ? (
                        <li className="list-group-item text-center px-0 text-white bg-success">
                          <span>Available</span>
                        </li>
                      ) : item.status_id === 2 ? (
                        <li className="list-group-item text-center px-0 text-white bg-danger">
                          <span>Reserved</span>
                        </li>
                      ) : item.status_id === 3 ? (
                        <li className="list-group-item text-center px-0 text-white bg-dark">
                          <span>Sold</span>
                        </li>
                      ) : item.status_id === 4 ? (
                        <li className="list-group-item text-center px-0 text-white bg-info">
                          <span>Not Released</span>
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </div>
                </div>
              );
            })}
*/
