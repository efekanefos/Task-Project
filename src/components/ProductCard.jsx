import React from "react";
import bed1apt from "../property_thumbs/1-bed-apt/i1.jpg";
import bed2apt from "../property_thumbs/2-bed-apt/i1.jpg";
import bed3apt from "../property_thumbs/3-bed-apt/i1.jpg";
import bed1smart from "../property_thumbs/1-bed-smart/i1.jpg";
import bed2smart from "../property_thumbs/2-bed-smart/i1.jpg";
import bed2ph from "../property_thumbs/2-bed-ph/i1.jpg";
import bed3ph from "../property_thumbs/3-bed-ph/i1.jpg";
import bed3pool from "../property_thumbs/3-bed-pool/i1.jpg";
import studio from "../property_thumbs/studio/i1.jpg";

function ProductCard(props) {
  const { item, mode } = props;
  return (
    <div>
      <div
        className="card border-0 "
        style={
          mode === "light"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#404040" }
        }
        id="hoverCard"
      >
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
          <h5 className="card-title text-info mb-0 pb-0">{item.code}</h5>
        </div>
        <hr />

        <ul className="list-group list-group-flush pt-0 mt-0">
          <li
            className="list-group-item pt-0 mt-0"
            style={
              mode === "light"
                ? { backgroundColor: "white", color: "black" }
                : { backgroundColor: "#404040", color: "white" }
            }
          >
            <small>
              FLOOR TYPE
              <span className="float-end">{item.room_type.label}</span>
            </small>
          </li>

          <li
            className="list-group-item"
            style={
              mode === "light"
                ? { backgroundColor: "white", color: "black" }
                : { backgroundColor: "#404040", color: "white" }
            }
          >
            <small>
              INTERNAL
              <span className="float-end">{item.net_area} m²</span>
            </small>
          </li>
          <li
            className="list-group-item"
            style={
              mode === "light"
                ? { backgroundColor: "white", color: "black" }
                : { backgroundColor: "#404040", color: "white" }
            }
          >
            <small>
              EXTERNAL
              <span className="float-end">{item.out_area} m²</span>
            </small>
          </li>
          <li
            className="list-group-item"
            style={
              mode === "light"
                ? { backgroundColor: "white", color: "black" }
                : { backgroundColor: "#404040", color: "white" }
            }
          >
            <small>
              GROSS
              <span className="float-end">{item.gross_area} m²</span>
            </small>
          </li>
          <li
            className="list-group-item"
            style={
              mode === "light"
                ? { backgroundColor: "white", color: "black" }
                : { backgroundColor: "#404040", color: "white" }
            }
          >
            <small>
              POOL
              <span className="float-end">{item.pool_area} m²</span>
            </small>
          </li>
          <li
            className="list-group-item"
            style={
              mode === "light"
                ? { backgroundColor: "white", color: "black" }
                : { backgroundColor: "#404040", color: "white" }
            }
          >
            <small>
              ROOF
              <span className="float-end">{item.roof_area} m²</span>
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
}

export default ProductCard;
