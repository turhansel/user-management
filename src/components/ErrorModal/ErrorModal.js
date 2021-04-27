import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import "./ErrorModal.scss";

const ErrorModal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onConfirm} />
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onConfirm}>0kay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
