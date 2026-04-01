import React from "react";

function ToDoList({ list, onToggle, onRemove }) {
  // 1. 모든 일을 완료했거나 목록이 비었을 때 보여줄 완료 화면 (이미지 속 그 화면!)
  if (list.length > 0 && list.every(item => item.isDone)) {
    return (
      <div className="list-container empty-state">
        <div className="check-circle">✓</div>
        <p>할 일을 모두 완료했습니다!</p>
      </div>
    );
  }

  // 2. 할 일이 남아 있을 때 목록 보여주기
  return (
    <div className="list-container">
      {/* 할 일 목록이 있을 때만 타이틀 표시 (A님 코드 스타일 반영) */}
      {list.length > 0 && <p className="list-label">할 일 목록:</p>}
      
      {list.map((item) => (
        <div key={item.id} className="todo-item">
          <input 
            type="checkbox" 
            checked={item.isDone} 
            onChange={() => onToggle(item.id)} 
          />
          <span className={item.isDone ? "done" : ""}>{item.text}</span>
          <button className="remove-btn" onClick={() => onRemove(item.id)}>⊖</button>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;