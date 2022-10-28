
import { useState } from 'react'



function VITEPROJECT() {
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState('')



    function inputChange(event) {
        setInputValue(event.target.value)

    }

    function buttonClick() {
        setTasks([...tasks, inputValue])
    }




    return (
        <div>
            <input placeholder="Digite sua Tarefa" onChange={inputChange} />

            <button onClick={buttonClick}>Adicionar Tarefa</button>

            <ul>
                {
                    tasks.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))

                }




            </ul>
        </div>

    )
}






