import React from 'react';

export const PracticeTodo = () => {
    const [text,setText] = React.useState('');
    const [todo,setTodo] = React.useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleClick = (e) => {
        setTodo([...todo,text]);
    }

    return (
        <div>
            <input type="text" value={text} placeholder="enter todo" onChange={handleChange} />
            <button onClick={handleClick}>ADD</button>
            {
                todo.map((e,i) =>(
                        <div key={i}>
                            {e}
                        </div>
                    ))  
            }
        </div>
    )
}


