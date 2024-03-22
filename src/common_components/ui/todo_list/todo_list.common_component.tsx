import "./todo_list.common_component.scss";

interface ITODOLIST {
  content: string;
  number: number;
  completed: boolean;
  handleComplete: any;
  id: string;
  handleDelete: any;
}

const TODOList = (props: ITODOLIST) => {
  console.log("props", props.id);
  return (
    <div className="todo_list_component_wrapper">
      <div className="todo_list_content">
        {`${props.number + 1}. ${props.content}`}
      </div>
      <div
        onClick={() => props.handleComplete(props.id)}
        className="todo_list_checkbox"
      >
        <input type={"checkbox"} checked={props.completed} />
      </div>
      <div
        onClick={() => props.handleDelete(props.id)}
        className="todo_list_delete"
      >
        X
      </div>
    </div>
  );
};

export default TODOList;
