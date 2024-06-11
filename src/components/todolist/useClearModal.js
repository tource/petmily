import { useEffect, useRef, useState } from "react";

const useClearModal = ({ todos, setTodos }) => {
  const [clearModalOpen, setClearModalOpen] = useState(false);
  const clearModalRef = useRef(null);

  // const isChecked = todos.map(checked);
  useEffect(() => {
    // 컴포넌트가 마운트될 때 clearModalOpen을 false로 설정
    setClearModalOpen(false);
    if (
      clearModalRef.current &&
      clearModalRef.current.classList.contains("open")
    ) {
      clearModalRef.current.classList.remove("open");
    }
  }, []);

  const openClearModal = () => {
    setClearModalOpen(true);
    if (clearModalRef.current) {
      clearModalRef.current.classList.toggle("open");
    }
  };

  const clearYes = () => {
    setClearModalOpen(false);
    const filteredItems = todos.filter(todo => todo.checked);
    setTodos(filteredItems); // 상태 업데이트
    if (clearModalRef.current) {
      clearModalRef.current.classList.remove("open");
    }
  };

  const clearNo = () => {
    setClearModalOpen(false);
    if (clearModalRef.current) {
      clearModalRef.current.classList.remove("open");
    }
  };

  return { clearModalOpen, openClearModal, clearYes, clearNo, clearModalRef };
};

export default useClearModal;