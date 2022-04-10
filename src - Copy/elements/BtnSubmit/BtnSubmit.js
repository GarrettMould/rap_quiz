import { Button } from "react-bootstrap";
import classes from "./BtnSubmit.module.css";
const BtnSubmit = (props) => {
  return (
    <div>
      <Button className={classes.btn}>Submit</Button>
    </div>
  );
};

export default BtnSubmit;
