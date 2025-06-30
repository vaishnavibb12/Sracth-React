import React, {useContext} from "react";
import {userContext} from "../context/context1"
import "../css/context.css"
import Context3 from './context3'

function context2() {
    const user = useContext(userContext);
  return (
    <div className="catt2">
      <div className="container">
    <div className='box'>
      <p>Context2</p>
       <p>{`Hellooo ${user}` }</p>
      <Context3 />
    </div>
    </div>
</div>
  )
}

export default context2
