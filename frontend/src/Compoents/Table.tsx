import React, { useState } from "react";
import Grid from "./Grid"; // Import the Grid component

const Table = () => {
  const allNumbers = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];
  const [numbers, setNumbers] = useState(allNumbers);

  return (
    <div className="container">
      {allNumbers.map((number, i) => (
        <div className="item" key={i}>
          <Grid storeNumber={number} />
        </div>
      ))}
    </div>
  );
};

export default Table;
