const data = [
  {
    info: "Andi placed these furniture inside the house:",
    imgs: [
      "./images/Bed.png",
      "./images/Table.png",
      "./images/Table.png",
      "./images/Chair.png",
      "./images/Chair.png",
      "./images/Chair.png",
      "./images/Chair.png",
      "./images/Chair.png",
      "./images/Plant.png",
      "./images/Plant.png",
      "./images/Plant.png",
    ],
    ques: "Which row in this table is wrong?",
    rightContent: [
      {
        mainHead: "furniture table",
        columns: [
          {
            subHead: "Furniture",
            names: [
              { label: "Bed", correct: false },
              { label: "Chair", correct: true }, // only this is correct
              { label: "Table", correct: false }, 
              { label: "Plant", correct: false },
            ],
          },
          {
            subHead: "Quantity",
            names: [
              { label: 1, correct: false },
              { label: 4, correct: true }, // only this is correct
              { label: 2, correct: false }, 
              { label: 3, correct: false },
            ],
          },
        ],
      },
    ],
  },
];

export default data;
