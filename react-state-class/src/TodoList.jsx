import { useState } from "react";
import {v4 as uuidv4} from  "uuid"; // unique  id generator
export default function TodoList(){
    let  [todos , setTodos] = useState([{task:"sample-task ", id :uuidv4() , isDone : false}]);
    let [newTodo , setnewtodo] = useState("");
    
    let addnewTask=()=>{
        setTodos ((prevTodos) => {
        return [...todos, { task: newTodo, id: uuidv4(), isDone :false }];
    });
        setnewtodo("");
    } ;

    let updateTodoValue = ((event) =>{
          setnewtodo(event.target.value);
    }); 

    let deleteTodo =(id) =>{
        setTodos ((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id != id));
    }; 

    let markAsalldone = () =>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            return{
                ...todo,
                isDone:false,
            }
        })
    );
    };

    let markAsDone = (id) =>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
        if(todo.id==id){
            return {
                ...todo,
                isDone:true,
            };
        }else{
            return todo;
        }
        
    })
);
    };
    let uppercaseOne = (id) =>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
        if(todo.id==id){
            return {
                ...todo,
                task:todo.task.toUpperCase(),
            };
        }else{
            return todo;
        }
        
    })
);
    };
        
    return (
        <div>
            
            <input placeholder = " Add a task " value = {newTodo} onChange={updateTodoValue}  /> 

            <button onClick = {addnewTask}> Add  Task </button>
           <br/> 
           <br/>
            <hr/>
           <h4> Task Todo </h4>
           <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                        <span 
                        style ={todo.isDone ? { textDecorationLine: "line-through" } :{} } >
                           {todo.task} 
                            </span>
                            &nbsp; &nbsp; &nbsp;
                            <button onClick = {()=>deleteTodo(todo.id)}> Delete </button>
                            <button onClick = { () => uppercaseOne(todo.id)}>UppercaseOne</button>
                            <button onClick = { ()=> markAsDone(todo.id)}>Mark as Done </button>
                           
                             </li>
                ))
            }
           </ul>
            <button onClick = { () => markAsalldone}> Mark as all done</button>
        </div>
    );
}