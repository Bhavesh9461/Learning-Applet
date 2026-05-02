import React, { useState } from "react";
import LeftBox from "../components/LeftBox";
import RightBox from "../components/RightBox";
import BottomBar from "../components/BottomBar";
import data from "../data/toolTable";

const ToolTable = () => {
  const [activeRow, setActiveRow] = useState(null);
  const [status, setStatus] = useState(null);

  return (
    <section
      className="
        w-full min-h-screen
        px-2 py-2
        sm:px-3 sm:py-3
        md:px-4 md:py-4
        lg:px-5 lg:py-5
        overflow-hidden
        flex flex-col justify-between
      "
    >
      {/* TOP SECTION */}
      <div
        className="
          w-full
          flex flex-col
          gap-3

          h-auto

          md:h-[88vh]
          md:flex-row
        "
      >
        {/* LEFT */}
        <div
          className="
            w-full
            md:w-1/2
            h-auto
            md:h-full
            min-h-[280px]
          "
        >
          <LeftBox data={data} />
        </div>

        {/* RIGHT */}
        <div
          className="
            w-full
            md:w-1/2
            h-auto
            md:h-full
            min-h-[320px]
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
          w-full
          mt-3
          h-auto

          md:h-[10vh]
          md:mt-2
        "
      >
        <BottomBar
          prevPath={"/colortable"}
          nextPath={"/furnituretable"}
          isCorrect={status === "correct"}
        />
      </div>
    </section>
  );
};

export default ToolTable;