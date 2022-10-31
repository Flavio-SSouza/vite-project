
import { useState } from 'react'
import{Item,Container,TodoList,Input,Button,UL} from './app.js'



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
        <Container>
            <TodoList>
            <Input placeholder="Digite sua Tarefa" onChange={inputChange} />

            <Button onClick={buttonClick}>Adicionar Tarefa</Button>

            <UL>
                {
                    tasks.map((item, index) => (
                        <Item key={index}>{item}</Item>
                    ))

                }




            </UL>
            </TodoList>
        </Container>
        

    )
}

export default VITEPROJECT




