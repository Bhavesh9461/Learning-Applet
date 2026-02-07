import React from "react";
import style from "../stylesheets/buttonbox.module.scss";

const ButtonBox = ({ elem, activeRow, status, onSelect }) => {
  return (
    <div className="w-full flex flex-col gap-[0.4rem]">
      <div
        className={`${style.mainBtn} h-10 flex items-center justify-center text-2xl rounded-md`}
      >
        <p className="font-bold">{elem.subHead}</p>
      </div>

      {elem.names.map((item, idx) => {
        const isActive = activeRow === idx;

        let bgClass = "bg-black text-white border-[var(--blue-dark)]";

        if (isActive && status === "correct") {
          bgClass = "bg-green-500 text-white border-green-700";
        }

        if (isActive && status === "wrong") {
          bgClass = "bg-red-500 text-white border-red-700";
        }


        return (
          <button
            key={idx}
            onClick={() => onSelect(idx, item.correct)}
            className={`w-full h-10 py-5 flex items-center justify-center rounded-md border-[0.125rem] text-xl transition-colors duration-300 cursor-pointer ${bgClass}`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonBox;
