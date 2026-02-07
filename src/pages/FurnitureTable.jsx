import React, { useState } from "react";
import data from "../data/furnitureTable";
import LeftBox from "../components/LeftBox";
import RightBox from "../components/RightBox";
import BottomBar from "../components/BottomBar";

const FurnitureTable = () => {
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
          prevPath={"/tooltable"}
          nextPath={"/shapetable"}
          isCorrect={status === "correct"}
        />
      </div>
    </section>
  );
};

export default FurnitureTable;
