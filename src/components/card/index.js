import { useState } from "react";
import Button from "../button";
const Card = ()=>{


    const [valor,setValor]=useState(0)

    function add(){
        setValor (valor+ 1)
    }
    function sub(){
      setValor (valor - 1)
  }
      return (
        <div class="card">
        <div class="card-header">
           meu primeiro card
        </div>
        <div class="card-body">
           <Button 
              type="button" 
              className="btn btn-outline-success"
              onClick={add}>
              ADD
           </Button>
           <Button 
              type="button" 
              className="btn btn-outline-Danger"
              onClick={sub}>
              SUB
           </Button>
            <p>{valor}</p>
        </div>
      </div>
      )
}

export default  Card;
