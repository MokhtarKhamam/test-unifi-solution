import { Skeleton } from "@mui/material";
import React from "react";
import ErrorComp from "../../components/ErrorComp.tsx";

interface ErrorNumber {
  firstText: string;
  secondText: string;
}

interface BikeNumberProps {
  number: number;
  loading: boolean;
  error: ErrorNumber | null;
  handleFetchNumber: () => void;
}

const BikeNubmer: React.FC<BikeNumberProps> = ({ number, loading, error, handleFetchNumber }) => {
  return (
    <>
      <h6 className="border-b border-gray-400 w-fit mx-auto text-[#666] font-semibold mt-8">
        <span className="font-semibold text-xl text-red-500 ">
          Total Number:
        </span>{" "}
        {loading ? (
          <Skeleton variant="rectangular" width={210} height={30} />
        ) : 
        error ? 
        <ErrorComp error={error} handleClick={handleFetchNumber} />
        :
          number
        }
      </h6>
    </>
  );
};

export default BikeNubmer;
