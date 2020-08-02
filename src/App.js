import React, { useState } from "react";
import Button from "./components/Pagination/Button";

export default function App() {

  const array = [
    { nome: "Jordan" },
    { nome: "Larocca" },
    { nome: "Maria" },
    { nome: "Diego" },
    { nome: "Fabio" },
    { nome: "Ana" },
    { nome: "João" },
    { nome: "Andre" },
    { nome: "Camila" },
    { nome: "Sabrina" },
  ];

  const totalItemsCount = array.length;
  const itemsCountPerPage = 5;
  const [activePage, setactivePage] = useState(1)
  const [limit, setlimit] = useState(5)

  return (
    <div className="App">
      {array.slice(0, limit).map((el, i) => {
        return <p>{el.nome}</p>;
      })}
      <Button
        onChange={(e) => {
          console.log("e",e)
        }}
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        colorButton={"#000"}
        colorTextButton={"#fff"}
        colorProgressBar={"#8B0000"}
      />
    </div>
  );
}
