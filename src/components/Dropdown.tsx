import { Form } from "react-bootstrap";
import "../css/App.css";

function dropdown() {
  return (
    <Form.Select defaultValue="Choose...">
        <option>Account 1</option>
        <option>Account 2</option>
        <option>Account 3</option>
    </Form.Select>
  );
}
export default dropdown;
