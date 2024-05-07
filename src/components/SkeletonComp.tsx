import React from "react";
import { LIMIT_PER_PAGE } from "../constant/constant";
import { Skeleton } from "@mui/material";

const SkeletonComp = () => {
  const array = Array.from({ length: LIMIT_PER_PAGE }, (_, index) => index);
  return (
    <div>
      {array.map((_, index) => (
        <div
          key={index}
          className="container mx-auto flex gap-4  items-start mt-8 p-2"
        >
          <div className="basis-[25%] h-[200px]">
            <Skeleton
              variant="rounded"
              sx={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="flex flex-col gap-y-4 md:flex-row justify-between items-start basis-[70%]">
            <div className="basis-[45%] flex flex-col gap-y-6">
              <Skeleton variant="rectangular" width={210} height={30} />
              <Skeleton variant="rectangular" width={210} height={30} />
              <Skeleton variant="rectangular" width={210} height={30} />
            </div>
            <div className="basis-[45%] flex flex-col gap-y-6">
              <Skeleton variant="rectangular" width={210} height={30} />
              <Skeleton variant="rectangular" width={210} height={30} />
              <Skeleton variant="rectangular" width={210} height={30} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonComp;
