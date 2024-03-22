import { useForm } from "react-hook-form";
import "./todo.screen.scss";
import { InputComponent, TODOList } from "utils/imports.utils";
import _ from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";
import { storeTodo, todoReport } from "recoil/recoil.store";

let id = 1;

const idGen = () => {
  return id++;
};

const ToDoScreen = () => {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      todo: "",
    },
  });

  const [todoList, setToDoList] = useRecoilState(storeTodo);

  const todoReports = useRecoilValue(todoReport);

  const onSubmit = (body: any) => {
    if (_.isEmpty(body.todo)) return;
    else {
      setToDoList((previousData) => [
        ...previousData,
        { id: idGen(), todo: body.todo, completed: false },
      ]);
      reset();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  const handleComplete = (id: number) => {
    let data: any = _.cloneDeep(todoList);
    const findIndex = _.findIndex(data, (e: any) => e.id === id);
    if (findIndex !== -1) {
      data[findIndex].completed = data[findIndex].completed ? false : true;
      setToDoList(data);
    }
  };

  const handleDelete = (id: number) => {
    let data: any = _.cloneDeep(todoList);
    const findIndex = _.findIndex(data, (e: any) => e.id === id);
    if (findIndex !== -1) {
      data.splice(findIndex, 1);
      setToDoList(data);
    }
  };

  return (
    <div className="todo_screen_container">
      <div className="todo_screen_wrapper">
        <div className="input_flex_wrapper">
          <div className="input_wrapper">
            <InputComponent
              label=""
              type="text"
              name="todo"
              control={control}
              placeholder="Type something..."
              onKeyDown={handleKeyPress}
            />
          </div>
          <div onClick={handleSubmit(onSubmit)} className="button_wrapper">
            Add
          </div>
        </div>
        <div className="todo_list_render_wrapper">
          <div className="todo_list_render_heading">TODO LISTS:</div>
          <div className="todo_list">
            {todoList &&
              todoList.map((item: any, i: number) => {
                return (
                  <div key={i}>
                    <TODOList
                      completed={item.completed}
                      number={i}
                      content={item.todo}
                      handleComplete={(value: number) => handleComplete(value)}
                      handleDelete={(value: number) => handleDelete(value)}
                      id={item.id}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="border"></div>
        <div className="todo_report">
          <div className="todo_report_heading_content">TODO REPORTS:</div>
          <div className="todo_report_flex_wrapper">
            <div className="todo_report_heading">Total Task Count:</div>
            <div className="todo_report_content">{todoReports.totalTask}</div>
          </div>

          <div className="todo_report_flex_wrapper">
            <div className="todo_report_heading">Completed Task:</div>
            <div className="todo_report_content">
              {todoReports.completedTask}
            </div>
          </div>
          <div className="todo_report_flex_wrapper">
            <div className="todo_report_heading">
              Not Yet Completed Task Count:
            </div>
            <div className="todo_report_content">
              {todoReports.notCompletedTask}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoScreen;
