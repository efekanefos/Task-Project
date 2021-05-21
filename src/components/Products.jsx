import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("/test/api/properties/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setResult(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {result.map((item, index) => {
            return (
              <div className="col-md-3">
                <div class="card">
                  {item.room_type.label === "3 Bed Pool" ? (
                    <img src={bed3pool} class="card-img-top" alt="..." />
                  ) : item.room_type.label === "1 Bed Smart" ? (
                    <img src={bed1smart} class="card-img-top" alt="..." />
                  ) : item.room_type.label === "1 Bed Apt" ? (
                    <img src={bed1apt} class="card-img-top" alt="..." />
                  ) : item.room_type.label === "Studio" ? (
                    <img src={studio} class="card-img-top" alt="..." />
                  ) : item.room_type.label === "3 Bed PH" ? (
                    <img src={bed3ph} class="card-img-top" alt="..." />
                  ) : item.room_type.label === "3 Bed Apt" ? (
                    <img src={bed3apt} class="card-img-top" alt="..." />
                  ) : item.room_type.label === "2 Bed Apt" ? (
                    <img src={bed2apt} class="card-img-top" alt="..." />
                  ) : item.room_type.label === "2 Bed PH" ? (
                    <img src={bed2ph} class="card-img-top" alt="..." />
                  ) : item.room_type.label === "2 Bed Smart" ? (
                    <img src={bed2smart} class="card-img-top" alt="..." />
                  ) : (
                    ""
                  )}

                  <div class="card-body">
                    <h5 class="card-title">{item.code}</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      FLOOR TYPE {item.room_type.label}
                    </li>
                    <li class="list-group-item">INTERNAL {item.net_area}</li>
                    <li class="list-group-item">EXTERNAL {item.out_area}</li>
                  </ul>
                </div>
              </div>
            );
          })}

          <div className="col-md-10">
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

/*
<div className="col-md-2">
                <h1>{item.code}</h1>
              </div>
useEffect(() => {
    fetch("https://wizio.co.uk/test/api/properties/")
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
*/
/*
const objectArray = Object.entries(numbers);

objectArray.forEach(([key, value]) => {
  console.log(key); // 'one'
  console.log(value); // 1
});
*/
