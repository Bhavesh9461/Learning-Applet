const data = [
  {
    info: "Andi used these paints to color the house:",
    imgs: [
      "./images/blue paint.png",
      "./images/pink paint.png",
      "./images/green paint.png",
      "./images/yellow paint.png",
      "./images/red paint.png",
      "./images/red paint.png",
      "./images/pink paint.png",
      "./images/yellow paint.png",
      "./images/orange paint.png",
      "./images/orange paint.png",
      "./images/yellow paint.png",
      "./images/yellow paint.png",
    ],
    ques: "Which row in this table is wrong?",
    rightContent: [
      {
        mainHead: "color table",
        columns: [
          {
            subHead: "Color",
            names: [
              { label: "Red", correct: false },
              { label: "Orange", correct: false },
              { label: "Yellow", correct: true }, // only this is correct
              { label: "Green", correct: false },
              { label: "Pink", correct: false },
              { label: "Blue", correct: false },
            ],
          },
          {
            subHead: "Quantity",
            names: [
              { label: 2, correct: false },
              { label: 2, correct: false },
              { label: 3, correct: true }, // only this is correct
              { label: 1, correct: false },
              { label: 2, correct: false },
              { label: 1, correct: false },
            ],
          },
        ],
      },
    ],
  },
];

export default data;
