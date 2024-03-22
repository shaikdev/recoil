import { ITODO } from "interfaces/common.interface";
import _ from "lodash";
import { atom, selector } from "recoil";

export const storeTodo = atom<ITODO[]>({
  key: "storeTodo",
  default: [],
});

export const todoReport = selector({
  key: "todoReport",
  get: ({ get }) => {
    // variables
    let totalTask;
    let completedTask;
    let notCompletedTask;
    const todoList = get(storeTodo);
    if (_.isEmpty(todoList)) {
      totalTask = 0;
      notCompletedTask = 0;
      completedTask = 0;
    } else {
      totalTask = _.size(todoList);
      completedTask = _.chain(todoList)
        .filter((e: any) => e.completed)
        .size()
        .value();
      notCompletedTask = _.chain(todoList)
        .filter((e: any) => !e.completed)
        .size()
        .value();
    }

    return {
      totalTask,
      completedTask,
      notCompletedTask,
    };
  },
});
