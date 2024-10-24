import { Component,useState } from "react";
export default function Hooks({initial,step}){
    const [count,setCount]=useState(initial)
    return (
        <>
        <span>
            <button onClick={()=>
                {
                    setCount(prevState=>{
                        return prevState + step
                    })
                }
            }>
                click to incriment
            </button>
            <button onClick={()=>
                {
                    setCount(initial)
                        
                }
            }>
                Resat!!
            </button>
            il y a {count} secondes
        </span>
        </>
    )
}


