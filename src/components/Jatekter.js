import React from 'react'
import Cella from './Cella'

export default function Jatekter(props) {

    return (
        <div>{
            props.lista.map((jel, index) => {
                return <Cella jel={jel} key={index} />
            }
            )
            }

        </div>
    )
}