import React, { useState } from "react";
import LeftBox from "../components/LeftBox";
import RightBox from "../components/RightBox";
import BottomBar from "../components/BottomBar";
import data from "../data/toolTable";

const ToolTable = () => {
  const [activeRow, setActiveRow] = useState(null);
  const [status, setStatus] = useState(null); // "correct" | "wrong"
  return (
    <section className="w-full h-screen px-1 py-2">
      <div className="top h-[90%] flex gap-3">
        <LeftBox data={data} />
        <RightBox
          data={data}
          activeRow={activeRow}
          status={status}
          setActiveRow={setActiveRow}
          setStatus={setStatus}
        />
      </div>
      <div className="bottom h-[10%]">
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
