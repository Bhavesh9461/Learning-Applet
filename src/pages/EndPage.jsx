import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../stylesheets/endpage.module.scss";

const EndPage = () => {
  const navigate = useNavigate();

  return (
    <section
      className={`
        ${style.startPage}

        w-full h-screen
        overflow-hidden

        bg-blue-900
        flex flex-col
        items-center justify-center
        text-center

        px-4 py-4
        sm:px-6 sm:py-6
        md:px-8 md:py-8

        gap-8 sm:gap-10 md:gap-14 lg:gap-18
      `}
    >
      {/* TOP CONTENT */}
      <div
        className="
          select-none
          flex flex-col
          items-center
          gap-4 sm:gap-5 md:gap-6
          max-w-5xl
          w-full
        "
      >
        <h1
          className="
            text-[var(--yellow-base)]
            font-bold
            leading-tight

            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          Reading Tables!
        </h1>

        <p
          className="
            text-white
            leading-snug

            text-lg
            sm:text-2xl
            md:text-3xl
            lg:text-[2.4rem]

            md:leading-[3rem]
            lg:leading-[3.5rem]
          "
        >
          Great work!
          <br />
          You found all the mistakes!
          <br />
          You have learned how to read data tables.
        </p>

        <h2
          className="
            text-white font-medium

            text-lg
            sm:text-xl
            md:text-2xl
            lg:text-[2.1rem]
          "
        >
          Tap "Start Over" to repeat this activity.
        </h2>
      </div>

      {/* BUTTON */}
      <div
        onClick={() => navigate("/")}
        className={`${style.bottom} relative cursor-pointer`}
      >
        <button
          className="
            bg-[var(--yellow-light)]
            text-black
            font-semibold
            border-2 border-black
            rounded-xl

            px-8 py-3
            text-xl

            sm:px-10 sm:py-3 sm:text-2xl
            md:px-12 md:py-4 md:text-3xl
            lg:px-16 lg:py-4 lg:text-4xl
          "
        >
          Start Over
        </button>

        <img
          src="./gifs/fingerTap.gif"
          alt="loading..."
          className="
            absolute
            top-7 right-[-8px]

            h-10
            sm:h-12
            md:h-14
            lg:h-18
          "
        />
      </div>
    </section>
  );
};

export default EndPage;