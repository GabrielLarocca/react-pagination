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
  const [limit, setlimit] = useState({ inicio: 0, fim: 0 })

  return (
    <div className="App">
      {array.slice(limit.inicio, limit.fim).map((el, i) => {
        return <p>{el.nome}</p>;
      })}
      <Button
        onChange={(a, b, c) => {
          console.log(a,b,c)
          setlimit({ inicio: a, fim: b })
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
