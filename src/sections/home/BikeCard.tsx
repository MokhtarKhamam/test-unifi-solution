import React from "react";
import { convertUnixTimestamp } from "../../utils/function.ts";
import { BikeData } from "../../../types.ts";



interface BikeCardProps {
  element: BikeData;
  color?: string;
}



const BikeCard: React.FC<BikeCardProps> = ({ element, color }) => {
  const stolenDate = convertUnixTimestamp(element.stolen).toLocaleString();


  return (
    <div className={`container mx-auto flex gap-4  items-start mt-8 bg-[${color}] p-2`}>
      <div className="basis-[25%] h-[200px]">
        <img
          className="w-full h-full object-cover"
          src={
            element.large_img ||
            "/assets/Screenshot (79).png"
          }
          alt=""
        />
      </div>
      <div className="flex flex-col gap-y-4 md:flex-row justify-between items-start basis-[70%]">
        <div className="basis-[45%]">
          <h6 className="text-[#3498db] text-xl font-semibold capitalize">
            {element.title}
          </h6>
          <p className="text-[#666] ">
            <span className="text-lg font-medium text-[#555]">
              description: &nbsp;
            </span>
            {element.description
              ? element.description
              : "there is no description"}
          </p>
          <p className="text-[#666]">
            <span className="text-lg font-medium text-[#555]">
              Date of theft:&nbsp;
            </span>
            {stolenDate}
          </p>
        </div>
        <div className="basis-[45%]">
          <p className="text-[#666]">
            {" "}
            <span className="text-lg font-medium text-[#555]">
              Reported case date:&nbsp;
            </span>
            {stolenDate}
          </p>
          <p className="text-[#666]">
            <span className="text-lg font-semibold text-[#E74C3C] uppercase">
              Stolen location:&nbsp;
            </span>
            {element.stolen_location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
