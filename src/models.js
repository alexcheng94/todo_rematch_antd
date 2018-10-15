import { v4 } from "uuid";
const initialState = [
  {
    id: v4(),
    content: "Wash kitchen stuff",
    completed: false
  },
  {
    id: v4(),
    content: "Pack clothes into luggage",
    completed: false
  },
  {
    id: v4(),
    content: "Pace rest into boxes",
    completed: false
  },
  {
    id: v4(),
    content: "Wrap mattress",
    completed: false
  }
];

export const todos = {
  state: initialState,
  reducers: {
    add: (state, content) => [...state, { id: v4(), content, completed: false }]
  }
};

// const state = [
//   {
//     id: 1,
//     content: "heller",
//     completed: false
//   },
//   {
//     id: 2,
//     content: "bye",
//     completed: false
//   }
// ];
