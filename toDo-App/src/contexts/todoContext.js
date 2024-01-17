import { createContext, useContext } from "react";

export const ToDoContext=createContext({
    todos:[{
        id:1,
        todo:"msg",
        completed:false
    }],
    addToDo:(todo)=>{},
    updateToDo:(id,todo)=>{},
    deleteToDo:(id)=>{},
    toggleComplete:(id)=>{}

});

export const ToDoContextProvider=ToDoContext.Provider

export const useToDo =()=>{
    return  useContext(ToDoContext);
}