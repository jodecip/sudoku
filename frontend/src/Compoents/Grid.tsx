import "./Grid.css"; // Import the CSS file with the grid styles
import Square from "./Square";

interface gridProps {
  storeNumber: number[];
}
const Grid = ({ storeNumber }: gridProps) => {
  return (
    <div className="container">
      <Square displayNumber={storeNumber[0]} />
      <Square displayNumber={storeNumber[1]} />
      <Square displayNumber={storeNumber[2]} />
      <Square displayNumber={storeNumber[3]} />
      <Square displayNumber={storeNumber[4]} />
      <Square displayNumber={storeNumber[5]} />
      <Square displayNumber={storeNumber[6]} />
      <Square displayNumber={storeNumber[7]} />
      <Square displayNumber={storeNumber[8]} />
    </div>
  );
};

export default Grid;
