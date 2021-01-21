import React from "react";
import Item from "../Item";

function ListaDeCompras() {
    return(
        <>
        <h1>Lista de compras: </h1>
        <Item nome= "Batata" />
        <Item nome= "Maçã" />
        <Item nome= "Abacaxi" />
        <Item nome= "Uva" />
        <Item nome= "Pera" />
        </>
    )
}

export default ListaDeCompras;