import { useState } from "react";
import "../../styles/TodoList/left.css";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.target.value);
  };

  const onSubmit = event => {
    onInsert(value);

    // submit 이벤트는 브라우저에서 새로고침 발생시킴
    // 이를 방지하기 위해 아래 함수 호출
    event.preventDefault();
    setValue("");
  };

  return (
    <form className="todo-right-create-box" onSubmit={onSubmit}>
      <input
        className="todo-right-create-input"
        placeholder="할 일을 입력하세요."
        onChange={onChange}
        value={value}
      />
      <button className="create-button" type="submit">
        <svg
          className="todo-right-create-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 23 23"
          fill="none"
        >
          <path
            d="M21.125 0.5H2.375C1.87772 0.5 1.40081 0.697544 1.04917 1.04917C0.697544 1.40081 0.5 1.87772 0.5 2.375V21.125C0.5 21.6223 0.697544 22.0992 1.04917 22.4508C1.40081 22.8025 1.87772 23 2.375 23H21.125C21.6223 23 22.0992 22.8025 22.4508 22.4508C22.8025 22.0992 23 21.6223 23 21.125V2.375C23 1.87772 22.8025 1.40081 22.4508 1.04917C22.0992 0.697544 21.6223 0.5 21.125 0.5ZM18.3125 12.6875H12.6875V18.3125C12.6875 18.5611 12.5887 18.7996 12.4129 18.9754C12.2371 19.1512 11.9986 19.25 11.75 19.25C11.5014 19.25 11.2629 19.1512 11.0871 18.9754C10.9113 18.7996 10.8125 18.5611 10.8125 18.3125V12.6875H5.1875C4.93886 12.6875 4.7004 12.5887 4.52459 12.4129C4.34877 12.2371 4.25 11.9986 4.25 11.75C4.25 11.5014 4.34877 11.2629 4.52459 11.0871C4.7004 10.9113 4.93886 10.8125 5.1875 10.8125H10.8125V5.1875C10.8125 4.93886 10.9113 4.7004 11.0871 4.52459C11.2629 4.34877 11.5014 4.25 11.75 4.25C11.9986 4.25 12.2371 4.34877 12.4129 4.52459C12.5887 4.7004 12.6875 4.93886 12.6875 5.1875V10.8125H18.3125C18.5611 10.8125 18.7996 10.9113 18.9754 11.0871C19.1512 11.2629 19.25 11.5014 19.25 11.75C19.25 11.9986 19.1512 12.2371 18.9754 12.4129C18.7996 12.5887 18.5611 12.6875 18.3125 12.6875Z"
            fill="#795A4B"
          />
        </svg>
      </button>
    </form>
  );
};

export default TodoInsert;
