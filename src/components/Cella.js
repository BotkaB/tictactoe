import React from 'react'
import './Cella.css'

export default function Cella(props){

    return(
       <div className="cella">
        {props.jel}
       </div>
    )
}