import React, { useRef } from "react";
import ButtonBox from "./ButtonBox";
import style from "../stylesheets/rightbox.module.scss";

const RightBox = ({
  data,
  activeRow,
  setActiveRow,
  status,
  setStatus,
}) => {
  const correctSound = useRef(new Audio("./audios/correct.mp3"));
  const wrongSound = useRef(new Audio("./audios/wrong.mp3"));

  const handleClick = (idx, isCorrect) => {
    setActiveRow(idx);
    setStatus(isCorrect ? "correct" : "wrong");

    const audio = isCorrect
      ? correctSound.current
      : wrongSound.current;

    audio.currentTime = 0;
    audio.play();
  };

  const columns = data[0].rightContent[0].columns;

  return (
    <div
      className="
        w-full h-full
        border-2 border-[var(--yellow-dark)]
        rounded-xl sm:rounded-2xl

        px-2 py-2
        sm:px-3 sm:py-3
        md:px-4 md:py-4
        lg:px-4 lg:py-5

        overflow-hidden
        flex flex-col
      "
    >
      {/* HEADER */}
      <div
        className={`
          ${style.head}
          w-full shrink-0
          flex items-center justify-center
          text-center capitalize

          min-h-[42px]
          sm:min-h-[48px]
          md:min-h-[56px]

          px-2 rounded-md
        `}
      >
        <p
          className="
            font-bold leading-tight

            text-[13px]
            xs:text-sm
            sm:text-lg
            md:text-xl
            lg:text-[1.55rem]
          "
        >
          {data[0].rightContent[0].mainHead}
        </p>
      </div>

      {/* BODY */}
      <div
        className="
          flex-1 mt-2 sm:mt-3 md:mt-4
          overflow-y-auto overflow-x-hidden
        "
      >
        {/* BELOW 1024px */}
        <div
          className="
            grid gap-2 w-full

            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3

            lg:hidden
          "
        >
          {columns.map((elem, idx) => (
            <div key={idx} className="w-full min-w-0">
              <ButtonBox
                elem={elem}
                activeRow={activeRow}
                setActiveRow={setActiveRow}
                status={status}
                onSelect={handleClick}
              />
            </div>
          ))}
        </div>

        {/* ABOVE 1024px */}
        <div
          className="
            hidden lg:grid
            w-full h-full gap-2 xl:gap-3

            auto-cols-fr
            grid-flow-col
          "
          style={{
            gridTemplateColumns: `repeat(${columns.length}, minmax(0,1fr))`,
          }}
        >
          {columns.map((elem, idx) => (
            <div key={idx} className="w-full min-w-0">
              <ButtonBox
                elem={elem}
                activeRow={activeRow}
                setActiveRow={setActiveRow}
                status={status}
                onSelect={handleClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBox;