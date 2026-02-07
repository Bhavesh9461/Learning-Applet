import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BottomBar = ({ prevPath, nextPath, isCorrect }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full overflow-hidden flex items-center justify-between mt-1 px-8">
      <button
        onClick={() => {
          navigate(prevPath);
        }}
        className="left cursor-pointer w-14 h-11 text-black bg-yellow-500 rounded-lg flex items-center justify-center"
      >
        <span className="text-2xl">
          {" "}
          <MdKeyboardDoubleArrowLeft />{" "}
        </span>
      </button>
      <div className="middle select-none">
        <h2 className="font-bold text-3xl">
          {isCorrect ? (
            <span className="flex items-center gap-2">
              Tap <MdKeyboardDoubleArrowRight className="text-2xl mt-2 " />
            </span>
          ) : (
            "Tap the incorrect row."
          )}
        </h2>
      </div>
      <button
        disabled={!isCorrect}
        onClick={() => {
          isCorrect && navigate(nextPath);
        }}
        className={`right w-14 h-11 rounded-lg flex items-center justify-center transition-all
          ${
            isCorrect
              ? "bg-yellow-500 text-black cursor-pointer"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }
        `}
      >
        <span className="text-2xl">
          {" "}
          <MdKeyboardDoubleArrowRight />{" "}
        </span>
      </button>
    </div>
  );
};

export default BottomBar;
