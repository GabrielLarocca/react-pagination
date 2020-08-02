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
    { nome: "XXXX" },
    { nome: "yyyyy" },
    { nome: "AAAAA" },
    { nome: "222" },
    { nome: "555" },
    { nome: "333" },
    { nome: "11111" },
    { nome: "2222" },
    { nome: "KKKK" },
    { nome: "ZZZZ" },
  ];

  const totalItemsCount = array.length;
  const itemsCountPerPage = 5;
  const [activePage, setactivePage] = useState(1)
  const [limit, setlimit] = useState({ inicio: 0, fim: 0 })

  return (
    <div className="App container">
      {array.slice(limit.inicio, limit.fim).map((el, i) => {
        return <p>{el.nome}</p>;
      })}
      <Button
        onChange={(a, b, c) => {
          setactivePage(c)
          setlimit({ inicio: a, fim: b })
          console.log(a,b,c)
        }}
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        colorButton={"#000"}
        colorTextButton={"#fff"}
        colorProgressBar={"#8B0000"}
        ShowChangeState={false}
      />
      
    </div>
  );
}
