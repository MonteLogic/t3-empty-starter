import { useContext } from "react";
import { ThemeContext } from "../pages/index";

export default function AnotherChild() {
  const { darkTheme } = useContext(ThemeContext);
  const style = {
    height: "12rem",
    width: "12rem",
    backgroundColor: darkTheme ? "black" : "white",
    margin: "2rem auto",
    border: "2px solid red",
    display: "grid",
    placeContent: "center"
  };
  return <div className="child" style={style}></div>;
}
