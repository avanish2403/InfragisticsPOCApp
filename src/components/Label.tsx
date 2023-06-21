import React from "react";
import { Form } from "react-bootstrap";
import "../css/App.css";

interface Props{
    children?:React.ReactNode;
}

const label: React.FC<Props> =({
    children
    }) => {
  return (
    <Form.Label className="label">{children}</Form.Label>
  );
}
export default label;
