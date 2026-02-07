import React, { useRef, useState } from "react";
import ButtonBox from "./ButtonBox";
import style from "../stylesheets/rightbox.module.scss";


const RightBox = ({data, activeRow, setActiveRow,status,setStatus}) => {
  

//   console.log(activeRow);
//   console.log(status);
  
    const correctSound = useRef(new Audio("./audios/correct.mp3"))
    const wrongSound = useRef(new Audio("./audios/wrong.mp3"))
  

  const handleClick = (idx, isCorrect) => {
    setActiveRow(idx);
    setStatus(isCorrect ? "correct" : "wrong");

    const audio = isCorrect ? correctSound.current : wrongSound.current;
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="w-[50%] h-full border-2 border-[var(--yellow-dark)] rounded-2xl px-3 py-6">
      <div
        className={` ${style.head} capitalize w-full h-12 flex justify-center items-center`}
      >
        <p className="font-bold text-[1.6rem] w-full flex justify-center items-center">
          {data[0].rightContent[0].mainHead}
        </p>
      </div>
      <div className="content flex gap-2 mt-5">
        {data[0].rightContent[0].columns.map((elem, idx) => {
          return (
            <div className="w-full" key={idx}>
              <ButtonBox
                elem={elem}
                activeRow={activeRow}
                setActiveRow={setActiveRow}
                status={status}
                onSelect={handleClick}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightBox;
