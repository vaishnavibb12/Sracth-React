import React, { useEffect, useRef, useState } from "react";
import { FaTrashAlt, FaCheck, FaEdit, FaSave } from "react-icons/fa";
import "../css/todaytodolist.css";

const ToDoList = () => {
  const [activeTab, setActiveTab] = useState("false");
  const [alltodos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const titleNew = useRef();
  const contentNew = useRef();

  const handleAddItem = (e) => {
    e.preventDefault();
    const formValues = {
      title: titleNew.current.value,
      content: contentNew.current.value,
      completed: false, 
    };
    console.log(formValues);

    setTodos((prev) => [...prev, formValues]);
  };

  const handleDeletedItem = (targetIndex) => {
    setTodos((prev) => prev.filter((_, idx) => idx !== targetIndex));
    setCompletedTodos((prev) => prev.filter((_, idx) => idx !== targetIndex));
  };

  const completedItem = (index) => {
    setTodos((prev) => prev.map((todo, i) => i === index ? { ...todo, completed: true } : todo
      )
    );
    setCompletedTodos((prev) => [...prev, alltodos[index]]);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTitle(alltodos[index].title);
    setEditContent(alltodos[index].content);
  };

  const handleSave = () => {
    setTodos((prev) =>
      prev.map((todo, index) =>
        index === editIndex
          ? { ...todo, title: editTitle, content: editContent }
          : todo
      )
    );
    setEditIndex(null);
    setEditTitle("");
    setEditContent("");
  };
  

  useEffect(() => {
    titleNew.current.value = "";
    contentNew.current.value = "";
    console.log(alltodos);
  }, [alltodos]);

  return (
    <div className="catt2">
      <div className="container">
        <div className="todo-container">
          <h2>My Todos</h2>
          <form className="todo-form" onSubmit={handleAddItem}>
            <div className="input-section">
              <input
                type="text"
                placeholder="What's the title of your To Do?"
                ref={titleNew}
              />
              <input
                type="text"
                placeholder="What's the description of your To Do?"
                ref={contentNew}
              />
              <button type="submit">Add</button>
            </div>
           
          </form>

          {(alltodos.length > 0 || completedTodos.length > 0) && (
            <>
              
              <div className="tab-container">
                <div
                  className={`tab ${activeTab === "false" ? "active" : ""}`}
                  onClick={() => setActiveTab("false")}
                >
                  To Do
                </div>
                <div
                  className={`tab ${activeTab === "true" ? "active" : ""}`}
                  onClick={() => setActiveTab("true")}
                >
                  Completed
                </div>
              </div>
              {activeTab === "false" &&
                alltodos.map((item, index) => (
                  <div className="todo-item" key={index}>
                    <div className="save-item">
                      {editIndex === index ? (
                        <>
                          <input
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                          />
                          <input
                            type="text"
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                          />
                        </>
                      ) : (
                        <>
                          <h4 className={item.completed ? "line-through" : ""}>
                            {item.title}
                          </h4>
                          <p className={item.completed ? "line-through" : ""}>
                            {item.content}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="icons">
                      {!item.completed && (
                        <>
                       
                        
                          {editIndex === index ? (
                            <FaSave onClick={handleSave} />
                          ) : (
                            <FaEdit onClick={() => handleEdit(index)} />
                          )}
                          <FaCheck onClick={() => completedItem(index)} />
                        </>
                      )}
                      <FaTrashAlt onClick={() => handleDeletedItem(index)} />
                    </div>
                  </div>
                ))}
              {activeTab === "true" &&
                completedTodos.map((item, index) => (
                  <div className="todo-item" key={index}>
                    <div className="save-item">
                      <h4>{item.title}</h4>
                      <p>{item.content}</p>
                    </div>
                    <div className="icons">
                   
                      <FaTrashAlt onClick={() => handleDeletedItem(index)} />
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
