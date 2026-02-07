const data = [
  {
    info: "Andi used these tools to build the house:",
    imgs: [
      "./images/Hammer.png",
      "./images/Hammer.png",
      "./images/Hammer.png",
      "./images/Hammer.png",
      "./images/Saw.png",
      "./images/Saw.png",
      "./images/Screwdriver.png",
      "./images/Nail.png",
      "./images/Nail.png",
      "./images/Nail.png",
      "./images/Nail.png",
      "./images/Nail.png",
      "./images/Nail.png",
    ],
    ques: "Which row in this table is wrong?",
    rightContent: [
      {
        mainHead: "tool table",
        columns: [
          {
            subHead: "Tool",
            names: [
              { label: "Hammer", correct: false },
              { label: "Saw", correct: false },
              { label: "Nail", correct: true }, // only this is correct
              { label: "Screwdriver", correct: false },
            ],
          },
          {
            subHead: "Quantity",
            names: [
              { label: 4, correct: false },
              { label: 2, correct: false },
              { label: 5, correct: true }, // only this is correct
              { label: 1, correct: false },
            ],
          },
        ],
      },
    ],
  },
];

export default data;
