import React from "react";
import BikeCard from "./BikeCard.tsx";
import { BikeData } from "../../../types.ts";

interface BikeProps {
  data: BikeData[];
}

const Bike: React.FC<BikeProps> = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((element, index) => (
        <BikeCard
          key={index}
          element={element}
          color={index % 2 === 0 ? "#F2F2F2" : undefined}
        />
      ))}
    </div>
  );
};

export default Bike;
