import React from "react";
import style from "../stylesheets/buttonbox.module.scss";

const ButtonBox = ({ elem, activeRow, status, onSelect }) => {
  return (
    <div className="w-full min-w-0 h-full flex flex-col gap-1 sm:gap-1.5 md:gap-2">

      {/* HEADER */}
      <div
        className={`
          ${style.mainBtn}
          w-full min-w-0

          h-8 sm:h-10 md:h-11 lg:h-12
          px-1 sm:px-2
          rounded-md

          flex items-center justify-center
        `}
      >
        <p
          className="
            w-full text-center font-bold leading-tight

            text-[12px]
            xs:text-xs
            sm:text-sm
            md:text-base
            lg:text-lg
            xl:text-xl
          "
        >
          {elem.subHead}
        </p>
      </div>

      {/* BUTTONS */}
      {elem.names.map((item, idx) => {
        const isActive = activeRow === idx;

        let bgClass =
          "bg-black text-white border-[var(--blue-dark)] hover:bg-zinc-900";

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
            className={`
             block
              w-full min-w-0 max-w-full

              h-9 sm:h-10 md:h-11 lg:h-12 xl:h-[52px]

              px-1 sm:px-2 md:px-3

              rounded-md border-2
              flex items-center justify-center

              transition-all duration-300
              cursor-pointer active:scale-[0.98]

              ${bgClass}
            `}
          >
            <span
              className="
                block w-full
                text-center leading-tight font-medium

                text-[11px]
                xs:text-xs
                sm:text-xs
                md:text-sm
                lg:text-base
                xl:text-lg

                whitespace-normal break-words
              "
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ButtonBox;