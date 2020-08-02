import React, { useState } from "react";
import "../style.css";

export default function Button(props) {

  const pages = props.totalItemsCount / props.itemsCountPerPage;
  const indexOfLastTodo = props.activePage * props.itemsCountPerPage;
  const indexOfFirstTodo = indexOfLastTodo - props.itemsCountPerPage;

  const styles = {
    colorButton: props.colorButton ? props.colorButton : "",
    color: props.colorTextButton ? props.colorTextButton : "",
    colorProgressBar: props.colorProgressBar ? props.colorProgressBar : "",
  };
  const onChange = () => {
     props.onChange( props.ShowChangeState ? indexOfFirstTodo : 0, indexOfLastTodo, props.activePage + 1);
  };

  return (
    <div className="container">
        <span >Você esta vendo {indexOfFirstTodo} de {props.totalItemsCount} </span>
      <div className="progress progress-moved">
        <div
          className="progress-bar"
          style={{ backgroundColor: styles.colorProgressBar, width: '50%'}}
        ></div>
      </div>
      <button
        className="stylebutton"
        style={{
          backgroundColor: styles.colorButton,
          color: styles.color,
        }}
        onClick={onChange}
      >
        <p>carregar mais {props.itemsCountPerPage} produtos</p>
      </button>
    </div>
  );
}
