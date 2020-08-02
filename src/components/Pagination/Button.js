import React, { useState } from "react";
import "../style.css";

export default function Button(props) {

  const styles = { 
      colorButton: props.colorButton ? props.colorButton : "",
      color: props.colorTextButton ? props.colorTextButton : "",
  };
  const onChange = () => {
    const pages = props.totalItemsCount / props.itemsCountPerPage;
    const indexOfLastTodo = props.activePage * props.itemsCountPerPage;
    const indexOfFirstTodo = indexOfLastTodo - props.itemsCountPerPage;
    props.onChange(indexOfFirstTodo, indexOfLastTodo, pages);
  };

  return (
    <button
      className="stylebutton"
      style={{
        backgroundColor: styles.colorButton,
        color: styles.color,
      }}
      onClick={onChange}
    >
      <p>carregar mais produtos</p>
    </button>
  );
}
