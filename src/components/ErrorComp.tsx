import React from "react";

interface ErrorCompProps {
  error: {
    firstText: string;
    secondText: string;
  };
  handleClick: () => void;
}

const ErrorComp: React.FC<ErrorCompProps> = ({ error, handleClick }) => {
  return (
    <div
      className="bg-red-100 text-center w-fit mx-auto border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">{error.firstText}</strong>&nbsp;
      <span
        className="block sm:inline underline cursor-pointer"
        onClick={handleClick}
      >
        {error.secondText}
      </span>
    </div>
  );
};

export default ErrorComp;
