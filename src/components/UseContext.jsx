import { useContext, useState } from "react";
import { ToggleTheme } from "../App";
import UseState from "./UseState";

function UseContext() {
  const theme = useContext(ToggleTheme);
  const [contentbool, setcontentbool] = useState(false);

  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };
  const handlecontentbool = ()=>{
    setcontentbool((prevContentBool) => !prevContentBool)
    return alert('content button clicked')
  }

  return (
    <>
      <div style={themeStyle}>
        <button onClick={handlecontentbool}>
          {contentbool===false ? "Show content" : "Hide content"}
        </button>
        {contentbool && <h1>This is made by Kalvium</h1>}
        <UseState />
      </div>
    </>
  );
}

export default UseContext;
