import React, { useEffect, useRef, useState } from 'react';

function CopyTextComponent() {
  const [input, setInput]= useState([]);

  const title = useRef();
  const description = useRef();
  const handleChange =(e)=>{
    e.preventDefault();
    const updateInput = {
      titleNew: title.current.value,
      descriptionNew: description.current.value,
    }
    console.log(updateInput);
    setInput((prev) => [...prev, updateInput])


  }

  useEffect(()=>{
    title.current.value="";
    description.current.value ="";

console.log(input);


  }, [input])

  return (
    <div>
      <input
        type="text"
        ref={title}
   
      />
      <input
        type="text"
        ref={description}
        
      />
      <button onClick={handleChange}>
        
      </button>
    </div>
  );
}

export default CopyTextComponent;