import { useState } from "react"

export const Todo = () => {

    // [variable, dispatchFunction(variable)] 
    const [text, setText] = useState("");
    const [todo, setTodo] =  useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleClick = (e) => {
        setTodo([...todo, text]); 
    }

    return (
        <div>
            <input onChange={handleChange} type="text" placeholder="Enter Todo" value={text} />
            <button onClick={handleClick}>Add Todo</button>

            {todo.map((e, i) => (
                <div key={i}>
                    {e}
                </div>
            ))}
        </div>
    )
}