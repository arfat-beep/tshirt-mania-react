import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./GrandPa.css";
export const RingContest = createContext("ring");
const GrandPa = () => {
  const [house, setHouse] = useState(1);
  const ornaments = "Diamond Ring";
  return (
    <RingContest.Provider value="Alur Ring">
      <div className="grandpa">
        <h4>GrandPa </h4>
        <button onClick={() => setHouse(house + 1)}>Buy A House</button>
        <p>House {house}</p>
        <section style={{ display: "flex" }}>
          <Father ornaments={ornaments} house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContest.Provider>
  );
};

export default GrandPa;
