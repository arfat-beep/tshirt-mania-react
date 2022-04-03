import React from "react";
import MySelf from "../MySelf/MySelf";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";
const Father = ({ house, ornaments }) => {
  return (
    <div>
      <h4>Father</h4>
      <h5>house : {house}</h5>
      <div style={{ display: "flex" }}>
        <MySelf ornaments={ornaments} house={house}></MySelf>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </div>
    </div>
  );
};

export default Father;
