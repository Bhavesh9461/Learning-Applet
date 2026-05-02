import React, { useState } from "react";
import LeftBox from "../components/LeftBox";
import RightBox from "../components/RightBox";
import BottomBar from "../components/BottomBar";
import data from "../data/colorTable";

const ColorTable = () => {
  const [activeRow, setActiveRow] = useState(null);
  const [status, setStatus] = useState(null);

  return (
    <section className="w-full min-h-screen overflow-hidden px-2 py-2 sm:px-4 sm:py-4 md:px-5 lg:px-6">
      
      {/* PAGE WRAPPER */}
      <div className="flex min-h-screen flex-col">

        {/* TOP AREA */}
        <div
          className="
            flex flex-col gap-3
            flex-1

            md:gap-4
            lg:flex-row
            lg:h-[calc(100vh-95px)]
          "
        >
          {/* LEFT BOX */}
          <div
            className="
              w-full
              h-[38vh]
              min-h-[280px]

              sm:h-[40vh]
              md:h-[42vh]

              lg:h-full
              lg:w-1/2
              overflow-hidden
            "
          >
            <LeftBox data={data} />
          </div>

          {/* RIGHT BOX */}
          <div
            className="
              w-full
              h-[38vh]
              min-h-[280px]

              sm:h-[40vh]
              md:h-[42vh]

              lg:h-full
              lg:w-1/2
              overflow-hidden
            "
          >
            <RightBox
              data={data}
              activeRow={activeRow}
              status={status}
              setActiveRow={setActiveRow}
              setStatus={setStatus}
            />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            mt-3
            h-[70px]

            sm:h-[74px]
            md:h-[78px]

            lg:h-[80px]
            shrink-0
          "
        >
          <BottomBar
            prevPath="/"
            nextPath="/tooltable"
            isCorrect={status === "correct"}
          />
        </div>
      </div>
    </section>
  );
};

export default ColorTable;