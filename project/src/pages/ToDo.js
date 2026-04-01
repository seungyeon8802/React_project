import React, { useState } from "react";
import "./ToDo.css";

function ToDo(){

    const [text, setText] = useState("")
    const [list, setList] = useState([])

    const handleText = (e)=>{
        setText(e.target.value)
    }

    const add = (e) => {
        e.preventDefault();

        if(text.trim() === "")
            return

        setList([...list, text])
        setText('')
    }

    return(
        <div>
            <h1>ToDo List</h1>

        <form onSubmit={add}>
       
         <input className="todo-input" 
                type="text" placeholder="오늘의 할 일!" value={text} onChange={handleText}/>

        </form>
        

        <div>
            <input className="list-input" type="text" placeholder="할 일 목록:"></input>
            
            {
             list.map( (item, index)=>(
                <div>
                  <li>{item}</li>
                </div>
             )  )   
            }

        </div>
        
        
        </div>
    )
}

export default ToDo