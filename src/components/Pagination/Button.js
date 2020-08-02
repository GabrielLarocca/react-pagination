import React, { useState } from "react";
import "../style.css";

export default function Button(props) {

  const styles = { 
      colorButton: props.colorButton ? props.colorButton : "",
      color: props.colorTextButton ? props.colorTextButton : "",
      colorProgressBar: props.colorProgressBar ? props.colorProgressBar : "",
  };
  const onChange = () => {
    const pages = props.totalItemsCount / props.itemsCountPerPage;
    const indexOfLastTodo = props.activePage * props.itemsCountPerPage;
    const indexOfFirstTodo = indexOfLastTodo - props.itemsCountPerPage;
    props.onChange(indexOfFirstTodo, indexOfLastTodo, pages);
  };

  return (
        <div className="container">    
            <div className="progress progress-moved">
                <div className="progress-bar" style={{backgroundColor: styles.colorProgressBar}}>
                </div>                       
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
