import "../../styles/TodoList/left.css";
import "../../styles/font.css";
import "../../styles/global.css";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const TodoRight = ({ onInsert, todos, onRemove, onToggle }) => {
  return (
    <div className="todo-right">
      <div className="todo-right-title-box">
        <div className="todo-right-dummy-box"></div>
        <div className="todo-right-date">05.24</div>
        <a className="todo-right-setting-box" href="#">
          <p className="todo-right-setting">설정</p>
          <div className="todo-right-setting-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.984 2.542C14.071 2.711 14.093 2.928 14.136 3.362C14.218 4.182 14.259 4.592 14.431 4.818C14.5382 4.95832 14.6806 5.06777 14.8437 5.13522C15.0069 5.20266 15.185 5.2257 15.36 5.202C15.64 5.165 15.96 4.904 16.598 4.382C16.935 4.105 17.104 3.967 17.285 3.909C17.5155 3.83534 17.7649 3.84777 17.987 3.944C18.162 4.02 18.317 4.174 18.624 4.482L19.518 5.376C19.826 5.684 19.98 5.838 20.056 6.013C20.1522 6.23506 20.1647 6.48447 20.091 6.715C20.033 6.896 19.895 7.065 19.619 7.402C19.096 8.041 18.835 8.36 18.797 8.641C18.7736 8.8159 18.7969 8.99387 18.8645 9.15686C18.9321 9.31985 19.0417 9.46204 19.182 9.569C19.407 9.741 19.818 9.782 20.639 9.864C21.072 9.907 21.289 9.929 21.459 10.016C21.6735 10.1272 21.8404 10.3123 21.929 10.537C22 10.714 22 10.932 22 11.368V12.632C22 13.068 22 13.286 21.93 13.462C21.8411 13.6874 21.6734 13.8729 21.458 13.984C21.289 14.071 21.072 14.093 20.638 14.136C19.818 14.218 19.408 14.259 19.182 14.431C19.0417 14.5382 18.9322 14.6806 18.8648 14.8437C18.7973 15.0069 18.7743 15.185 18.798 15.36C18.836 15.64 19.097 15.96 19.619 16.598C19.895 16.935 20.033 17.103 20.091 17.285C20.1647 17.5155 20.1522 17.7649 20.056 17.987C19.98 18.162 19.826 18.316 19.518 18.624L18.624 19.517C18.316 19.826 18.162 19.98 17.987 20.055C17.7649 20.1512 17.5155 20.1637 17.285 20.09C17.104 20.032 16.935 19.894 16.598 19.618C15.959 19.096 15.64 18.835 15.36 18.798C15.185 18.7743 15.0069 18.7973 14.8437 18.8648C14.6806 18.9322 14.5382 19.0417 14.431 19.182C14.259 19.407 14.218 19.817 14.136 20.638C14.093 21.072 14.071 21.289 13.984 21.458C13.8732 21.6732 13.6881 21.8409 13.463 21.93C13.286 22 13.068 22 12.632 22H11.368C10.932 22 10.714 22 10.538 21.93C10.3126 21.8411 10.1271 21.6734 10.016 21.458C9.929 21.289 9.907 21.072 9.864 20.638C9.782 19.818 9.741 19.408 9.569 19.182C9.46192 19.0418 9.31968 18.9325 9.1567 18.8651C8.99372 18.7976 8.81581 18.7745 8.641 18.798C8.36 18.835 8.041 19.096 7.402 19.618C7.065 19.895 6.896 20.033 6.715 20.091C6.48447 20.1647 6.23506 20.1522 6.013 20.056C5.838 19.98 5.683 19.826 5.376 19.518L4.482 18.624C4.174 18.316 4.02 18.162 3.944 17.987C3.84777 17.7649 3.83534 17.5155 3.909 17.285C3.967 17.104 4.105 16.935 4.381 16.598C4.904 15.959 5.165 15.64 5.202 15.359C5.22552 15.1842 5.20239 15.0063 5.13495 14.8433C5.06751 14.6803 4.95816 14.5381 4.818 14.431C4.593 14.259 4.182 14.218 3.361 14.136C2.928 14.093 2.711 14.071 2.541 13.984C2.32655 13.8728 2.1596 13.6877 2.071 13.463C2 13.286 2 13.068 2 12.632V11.368C2 10.932 2 10.714 2.07 10.538C2.15889 10.3126 2.32661 10.1271 2.542 10.016C2.711 9.929 2.928 9.907 3.362 9.864C4.182 9.782 4.593 9.741 4.818 9.569C4.95834 9.46204 5.06788 9.31985 5.1355 9.15686C5.20312 8.99387 5.22641 8.8159 5.203 8.641C5.165 8.36 4.903 8.041 4.381 7.401C4.105 7.064 3.967 6.896 3.909 6.714C3.83534 6.48347 3.84777 6.23406 3.944 6.012C4.02 5.838 4.174 5.683 4.482 5.375L5.376 4.482C5.684 4.174 5.838 4.019 6.013 3.944C6.23506 3.84777 6.48447 3.83534 6.715 3.909C6.896 3.967 7.065 4.105 7.402 4.381C8.041 4.903 8.36 5.164 8.64 5.202C8.81521 5.22578 8.9936 5.20267 9.15697 5.13504C9.32034 5.06741 9.46286 4.95766 9.57 4.817C9.74 4.592 9.782 4.182 9.864 3.361C9.907 2.928 9.929 2.711 10.016 2.541C10.127 2.32617 10.3121 2.15884 10.537 2.07C10.714 2 10.932 2 11.368 2H12.632C13.068 2 13.286 2 13.462 2.07C13.6874 2.15889 13.8729 2.32661 13.984 2.542ZM12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16Z"
                fill="#694E42"
              />
            </svg>
          </div>
        </a>
      </div>
      <p className="todo-right-title">오늘의 할일</p>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
};

export default TodoRight;