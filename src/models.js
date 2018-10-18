import { v4 } from "uuid";

const initialState = [
  {
    id: v4(),
    content: "学习新知识",
    completed: false
  },
  {
    id: v4(),
    content: "锻炼30分钟",
    completed: false
  },
  {
    id: v4(),
    content: "吃一顿健康的晚餐",
    completed: false
  },
  {
    id: v4(),
    content: "给家人打电话",
    completed: false
  }
];

export const todos = {
  state: initialState,
  reducers: {
    add: (state, content) => [
      ...state,
      { id: v4(), content, completed: false }
    ],
    toggle: (state, id) =>
      state.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    delete: (state, id) => state.filter(todo => todo.id !== id),
    edit: (state, id, newVal) =>
      state.map(todo => (todo.id === id ? { ...todo, content: newVal } : todo))
  },
  effects: {
    async logState(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(rootState);
    }
  }
};
