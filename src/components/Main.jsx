import React from "react";

//import style file
import "../assets/css/fontiran.css"
import "../assets/css/style.css";

//import data
import Data from "../data/data.json";

function Main(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="items">
          {Data.map((d) => {
            console.log(d.name);
            return (
              <a key={d.id} className="item">
                <h3>{d.name}</h3>
              </a>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;
