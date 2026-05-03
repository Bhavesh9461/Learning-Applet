import React, { useState } from "react";
import LeftBox from "../components/LeftBox";
import RightBox from "../components/RightBox";
import BottomBar from "../components/BottomBar";
import data from "../data/shapeTable";

const ShapeTable = () => {
  const [activeRow, setActiveRow] = useState(null);
  const [status, setStatus] = useState(null);

  return (
    <section
      className="
        w-full h-screen
        overflow-hidden

        px-2 py-2
        sm:px-4 sm:py-4
        md:px-5
        lg:px-6
      "
    >
      {/* PAGE WRAPPER */}
      <div className="h-full flex flex-col overflow-hidden">

        {/* TOP AREA */}
        <div
          className="
            flex-1
            min-h-0
            flex flex-col gap-3

            md:gap-4
            lg:flex-row
          "
        >
          {/* LEFT BOX */}
          <div
            className="
              w-full
              flex-1
              min-h-0

              lg:w-1/2
            "
          >
            <LeftBox data={data} />
          </div>

          {/* RIGHT BOX */}
          <div
            className="
              w-full
              flex-1
              min-h-0

              lg:w-1/2
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
            h-[68px]
            sm:h-[72px]
            md:h-[76px]
            lg:h-[80px]

            shrink-0
            mt-2
          "
        >
          <BottomBar
            prevPath={"/shapetable"}
            nextPath={"/endpage"}
            isCorrect={status === "correct"}
          />
        </div>
      </div>
    </section>
  );
};

export default ShapeTable;