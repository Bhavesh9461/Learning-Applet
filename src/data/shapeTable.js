const data = [
  {
    info: "Andi chose different shapes of floor tiles for the house:",
    imgs: [
      "./images/Squar.png",
      "./images/Circle.png",
      "./images/Diamond.png",
      "./images/Diamond.png",
      "./images/Circle.png",
      "./images/Circle.png",
      "./images/Circle.png",
      "./images/Diamond.png",
      "./images/Diamond.png",
      "./images/Circle.png",
      "./images/Star.png",
      "./images/Star.png",
      "./images/Star.png",
      "./images/Star.png",
    ],
    ques: "Which row in this table is wrong?",
    rightContent: [
      {
        mainHead: "furniture table",
        columns: [
          {
            subHead: "Tile Shape",
            names: [
              { label: "Square", correct: false },
              { label: "Circle", correct: true }, // only this is correct
              { label: "Diamond", correct: false }, 
              { label: "Star", correct: false },
            ],
          },
          {
            subHead: "Quantity",
            names: [
              { label: 1, correct: false },
              { label: 3, correct: true }, // only this is correct
              { label: 4, correct: false }, 
              { label: 4, correct: false },
            ],
          },
        ],
      },
    ],
  },
];

export default data;
