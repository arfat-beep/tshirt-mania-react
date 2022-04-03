import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house, ornaments }) => {
  return (
    <div>
      <h4>my {house}</h4>
      <Special ornaments={ornaments}></Special>
    </div>
  );
};

export default MySelf;
