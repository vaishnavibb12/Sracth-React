import React, {useContext} from "react";
import {userContext} from "../context/context1"
import "../css/context.css"

import Context4 from './context4'

function context3() {
    const user = useContext(userContext);
  return (
    <div className="catt2">
      <div className="container">
    <div className='box'>
      <p>Context3</p>
      <p>{`Hello Again ${user}` }</p>
      <Context4/>
    </div>
    </div>
</div>
  )
}

export default context3
