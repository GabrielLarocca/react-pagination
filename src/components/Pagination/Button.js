
import React, {useState} from 'react'
import '../style.css'

export default function Button (props){

    const [contador, setcontador] = useState()

const styles = {
        colorButton: props.colorButton ? props.colorButton  : "",
        color: props.colorTextButton ? props.colorTextButton : ""
}
{console.log(props.colorButton)}

function subtracao(total, perpage){
    const conta = total - perpage
}

return(
    <button 
    className="stylebutton"
    style={{
        backgroundColor: styles.colorButton,
        color: styles.color
    }} 
    onClick={subtracao(props.totalItemsCount, props.itemsCountPerPage)}
    >
        <p>carregar mais {contador} produtos</p>
    </button>
)

}

