
import "../css/context.css";
import React, {useContext} from "react";
import {userContext} from "../context/context1"


function context4() {
    const user = useContext(userContext);
  return (
    <div className="catt2">
      <div className="container">
        <div className="box">
          <p>Context4</p>
            <p>{`Bye ${user}` }</p>
        </div>

      </div>
    </div>
  );
}   

export default context4;
