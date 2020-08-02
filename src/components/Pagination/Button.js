
import React from 'react'
import '../style.css'

export default function Button (props){

const styles = {
        colorButton: props.colorButton ? `'${props.colorButton}'`  : "#fff"
}
{console.log(props.colorButton)}



return(
    <button className={{backgroundColor: styles.colorButton}}><p>Carregar Mais {props.totalItemsCount - props.itemsCountPerPage} produtos</p></button>
)

}

