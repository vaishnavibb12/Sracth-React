import React, { useState, createContext } from 'react'
import "../css/context.css"
import Context2 from './context2'
export const userContext = createContext();



function context1() {
    const [user, setUser] = useState("Vaishnavi");
  return (
    <div className="catt2">
      <div className="container">
    <div className='box'>
      <h4>Context1</h4>
   <p>{`Hello ${user}`}</p>
<userContext.Provider value={user}>



      <Context2 user={user}/>
      </userContext.Provider>


    </div>
    </div>
</div>
  )
}

export default context1
