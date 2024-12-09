import { useState, useEffect } from "react";

export default function Welcome (props)
{
    const [counter, setCounter] = useState(0);
    const [semaforo, setSemaforo] = useState(false);
    const{message, name} =props;
    useEffect(()=>{
        console.log(semaforo);
    }, [semaforo]);

    const contar = () => {
        //console.log("Entrando en la función de contar");
        setCounter(counter+1);
        setSemaforo(!semaforo);
    }
    console.log(semaforo);
//<!–- si semaforo es true = red sino green -->
    return (<div>
    <p> Hola desde la van, soy {name},new {message} </p>
    <h2> Contador de React con hooks </h2>
    <h4>El número de contador es {counter}</h4> 
    <p>El semaforo está en {semaforo ? 'red' : 'green' }</p> 
    <button type= "submit" onClick= {contar}>
        sumar uno </button> 
        
    </div>)
    ;
}////</div>{() => setCounter(counter+1)}>Sumar uno </button>