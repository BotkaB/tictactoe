import React from 'react'
import Cella from './Cella'

export default function Jatekter(props) {

    function katt(adat){
        console.log("jatekterben", adat)
        props.katt(adat)
    }

    return (
        <>{
            props.lista.map((jel, index) => {
                return <Cella jel={jel} key={index} index={index} katt={katt}/>
            }
            )
            }

        </>
    )
}