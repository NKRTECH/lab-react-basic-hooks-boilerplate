import { useState } from "react";
import { useEffect } from "react";

function UseState(){

  const [like, setlike] = useState(0);

  return(
    <div>
      <h3>{like}</h3>
      <button onClick={()=>setlike(like+1)}>like</button>
    </div>
  )
}
export default UseState;
