import React from "react";

const LeftBox = ({ data }) => {
  return (
    <div
      className="
        w-full h-full
        border-2 border-[var(--yellow-dark)]
        rounded-2xl
        px-3 py-3

        sm:px-4 sm:py-4
        md:px-5 md:py-4
        lg:px-8 lg:py-3

        flex flex-col justify-between
        text-center
        overflow-hidden
      "
    >
      {/* TOP TITLE */}
      <h2
        className="
          font-bold text-[var(--yellow-base)]
          text-xl
          sm:text-2xl
          md:text-3xl
          leading-tight
        "
      >
        {data[0].info}
      </h2>

      {/* IMAGES */}
      <div
        className="
          w-full flex-1
          overflow-y-auto overflow-x-hidden
          flex flex-wrap justify-center items-center
          gap-x-2 gap-y-2
          py-2 my-2
        "
      >
        {data[0].imgs.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="flex items-center justify-center"
            >
              <img
                src={elem}
                alt=""
                className="
                  object-contain object-center

                  w-14 h-20
                  sm:w-16 sm:h-24
                  md:w-18 md:h-28
                  lg:w-20 lg:h-32
                "
              />
            </div>
          );
        })}
      </div>

      {/* BOTTOM QUESTION */}
      <h3
        className="
          font-bold text-[var(--yellow-base)]
          text-lg
          sm:text-xl
          md:text-2xl
          lg:text-[1.7rem]
          leading-tight
        "
      >
        {data[0].ques}
      </h3>
    </div>
  );
};

export default LeftBox;