import React from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BottomBar = ({ prevPath, nextPath, isCorrect }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full overflow-hidden flex items-center justify-between gap-3 sm:gap-5 px-2 sm:px-5 md:px-8">

      {/* LEFT BUTTON */}
      <button
        onClick={() => navigate(prevPath)}
        className="shrink-0 w-10 h-10 sm:w-12 sm:h-11 md:w-14 md:h-11 text-black bg-yellow-500 rounded-lg flex items-center justify-center"
      >
        <span className="text-xl sm:text-2xl">
          <MdKeyboardDoubleArrowLeft />
        </span>
      </button>

      {/* TEXT */}
      <div className="middle flex-1 text-center select-none px-1">
        <h2 className="font-bold leading-tight text-[11px] xs:text-xs sm:text-lg md:text-2xl lg:text-3xl">
          {isCorrect ? (
            <span className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
              Tap
              <MdKeyboardDoubleArrowRight className="text-base sm:text-xl md:text-2xl" />
            </span>
          ) : (
            "Tap the incorrect row."
          )}
        </h2>
      </div>

      {/* RIGHT BUTTON */}
      <button
        disabled={!isCorrect}
        onClick={() => isCorrect && navigate(nextPath)}
        className={`shrink-0 w-10 h-10 sm:w-12 sm:h-11 md:w-14 md:h-11 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isCorrect
            ? "bg-yellow-500 text-black cursor-pointer"
            : "bg-gray-400 text-gray-700 cursor-not-allowed"
        }`}
      >
        <span className="text-xl sm:text-2xl">
          <MdKeyboardDoubleArrowRight />
        </span>
      </button>
    </div>
  );
};

export default BottomBar;