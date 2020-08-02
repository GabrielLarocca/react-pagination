
import React from 'react'
import '../style.css'

export default function Button (classname){

return(
    <button className={classname ?  'stylebutton' : 'stylebutton'}><p>Carregar Mais total - mostrados produtos</p></button>

)
}
