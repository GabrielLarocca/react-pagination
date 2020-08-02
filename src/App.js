import React from "react";
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

  return (
    <div className="App">
      <Button
        array={array}
        onChange={() => {
          console.log("Botão selecionado");
        }}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        colorButton={"#000"}
        colorProgressBar={"#8B0000"}
      >
        Default
      </Button>
    </div>
  );
}
