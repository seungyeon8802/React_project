import React, { useState } from "react";
import ToDo from "./pages/ToDo";       // 라헬 파트
import ToDoList from "./pages/TodoList"; // 효경 파트
import "./App.css";

function App() {
  // 초기 상태를 빈 배열([])로 설정해서 자동으로 뜨는 항목을 없앴습니다.
  const [list, setList] = useState([]);

  // 할 일 추가 함수 (A님이 주신 add 로직을 App 수준으로 가져옴)
  const add = (text) => {
    const newTodo = { id: Date.now(), text, isDone: false };
    setList([...list, newTodo]);
  };

  // 할 일 상태 변경 (B님 파트용)
  const onToggle = (id) => {
    setList(list.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item));
  };

  // 할 일 삭제 (B님 파트용)
  const onRemove = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      {/* A님 컴포넌트 호출: add 함수를 선물로 보내줍니다. */}
      <ToDo add={add} />
      
      {/* B님 컴포넌트 호출: list 데이터와 관리 함수들을 보냅니다. */}
      <ToDoList list={list} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
}

export default App;