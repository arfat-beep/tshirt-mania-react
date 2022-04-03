import React, { useContext } from "react";
import { RingContest } from "../GrandPa/GrandPa";

const Special = ({ ornaments }) => {
  const ring = useContext(RingContest);
  return (
    <div>
      <h4>Special {ring}</h4>
    </div>
  );
};

export default Special;
