import React, { useRef } from "react";
import "../Css/UseRef.css";
import { FaBold, FaItalic, FaUnderline, FaStrikethrough } from "react-icons/fa";

function UseReftext() {
  const editorRef = useRef(null);

  const formatText = (command) => {
    document.execCommand(command, false, null);
    editorRef.current.focus();
  };
  

  const handleSave = () => {
    const Content = editorRef.current.innerHTML;

    console.log("Saved Content:", Content);
  };

  return (
    <div className="catt2" style={{ background: "#0000005c" }}>
      <div className="container">
        <div className="editor-container">
          <div className="toolbar">
            <button onClick={() => formatText("bold")}>
              <FaBold />
            </button>
            <button onClick={() => formatText("italic")}>
              <FaItalic />
            </button>
            <button onClick={() => formatText("underline")}>
              <FaUnderline />
            </button>
            <button onClick={() => formatText("strikeThrough")}>
              <FaStrikethrough />
            </button>
          </div>

          <div
            className="editor"
            contentEditable
            ref={editorRef}
            placeholder="Type something..."
          ></div>

          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
export default UseReftext;
