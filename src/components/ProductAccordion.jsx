import React from "react";

function ProductAccordion(props) {
  const { setStatus, result, mode } = props;
  let All = result;
  let Available = result.filter((item) => item.status_id === 1);
  let Reserved = result.filter((item) => item.status_id === 2);
  let Sold = result.filter((item) => item.status_id === 3);
  let NotReleased = result.filter((item) => item.status_id === 4);

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
    setStatus(oneBedApt);
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
  let onAll = () => {
    setStatus(All);
  };
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
      <div className="accordion" id="accordionExample1">
        <div
          className="accordion-item"
          style={
            mode === "light"
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: "#404040", color: "white" }
          }
        >
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={
                mode === "light"
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#242526" }
              }
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
                        id="All"
                        onClick={onAll}
                      />
                      <label className="form-check-label" htmlFor="All">
                        All
                      </label>
                    </div>
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
        <div
          className="accordion-item"
          style={
            mode === "light"
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: "#404040", color: "white" }
          }
        >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
              style={
                mode === "light"
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#242526" }
              }
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
                      <label className="form-check-label" htmlFor="1BedApt">
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
                      <label className="form-check-label" htmlFor="2BedApt">
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
                    <label className="form-check-label" htmlFor="3BedApt">
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
                    <label className="form-check-label" htmlFor="1BedSmart">
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
                    <label className="form-check-label" htmlFor="2BedSmart">
                      2BedSmart
                    </label>
                  </div>
                </div>

                <div className="col-6">
                  {/* */}
                  <div className="form-check">
                    <input
                      className="form-check-input border-info "
                      type="radio"
                      disabled
                      name="flexRadioDefault"
                      id="1Bedph"
                      onClick={on1Bedph}
                    />
                    <label className="form-check-label" htmlFor="1Bedph">
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
                    <label className="form-check-label" htmlFor="2Bedph">
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
                    <label className="form-check-label" htmlFor="3BedPool">
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
                    <label className="form-check-label" htmlFor="Studio">
                      Studio
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAccordion;
