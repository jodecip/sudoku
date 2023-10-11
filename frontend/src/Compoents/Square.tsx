import "./Grid.css";

interface SquareProps {
  displayNumber: number;
}

const Square = ({ displayNumber }: SquareProps) => {
  return (
    <div className="item"> {displayNumber === 0 ? " " : displayNumber} </div>
  );
};

export default Square;
