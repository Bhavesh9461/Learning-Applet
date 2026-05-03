import React from "react";
import style from "../stylesheets/startpage.module.scss";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
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
          Time to be a data detective
          <br />
          Look closely at the pictures and the table.
          <br />
          Can you find what is wrong?
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
          Tap "Start" to begin
        </h2>
      </div>

      {/* BUTTON */}
      <div
        onClick={() => navigate("/colortable")}
        className={`${style.bottom} relative cursor-pointer`}
      >
        <button
          className="
            bg-[var(--yellow-light)]
            text-black
            font-semibold
            border-2 border-black
            rounded-xl

            px-10 py-3
            text-2xl

            sm:px-12 sm:py-4 sm:text-3xl
            md:px-14 md:py-4 md:text-4xl
            lg:px-16 lg:py-4 lg:text-4xl
          "
        >
          Start
        </button>

        <img
          className="
            absolute
            top-8 right-[-10px]

            h-12
            sm:h-14
            md:h-16
            lg:h-18
          "
          src="./gifs/fingerTap.gif"
          alt="loading..."
        />
      </div>
    </section>
  );
};

export default StartPage;