import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteButton }) => {
  return (
    <div className="items__container">
      {todoItems.map((item, id) => (
        <TodoItem
          key={id}
          TodoName={item.name}
          TodoDate={item.dueDate}
          onDeleteButton={onDeleteButton}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
