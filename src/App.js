import React,{useState}from 'react'
import './App.css';
import TodoBoard from './components/TodoBoard';


function App(){
    const[inputvalue,setInputValue] = useState('')
    const [todoList,setTodoList] = useState([])
    const addItem = () =>{  
        console.log("im hererererer",inputvalue)
        setTodoList([...todoList,inputvalue])}
    
    return(
        <main>
        

            <input  placeholder='내용을 입력하세요' className='input' value={inputvalue}
             type='text' onChange=
            {(event)=> setInputValue(event.target.value)}></input>
            <button className='button' onClick={addItem}>추가</button>
            <TodoBoard todoList = {todoList}/>
          
       
        </main>

    )


}



export default App;