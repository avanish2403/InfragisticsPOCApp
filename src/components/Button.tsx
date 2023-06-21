import React from "react";
import "../css/App.css";

interface Props{
    children?:React.ReactNode;
    onClick: () => void;
}

const button: React.FC<Props> =({
    children,
    onClick
    }) => {
  return (
    <button onClick={onClick} className="button" type="button">{children}</button>
  );
}
export default button;
