import React, { useState, useEffect } from 'react';
import { createTasks, getTasks } from '../../services/ApiRequest';
import Header from '../Header';
import ToDoArea from '../ToDoArea';
 const Planner = () => {
    const [inputValue, setInputValue] = useState('')
    const [tasks, setTasks] = useState([])
    const [day, setDay] = useState()
    
    useEffect(() => {
        handleTasks() 
    }, []);
    
    const handleTasks = () => {
        getTasks(setTasks) //busca na api - seta no state
    }

    const inputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleDay = (event) => {
        setDay(event.target.value)
    }

    const newTask =  () => {
        const body = {text: inputValue, day: day}
        createTasks(body)//adiciona na api
        handleTasks()
        setInputValue('')
    }

    const cleanTasks = () => {
        //ver isso depois
        setTasks([])
        setDay('')
    }

 

     return (  
         <>
            <Header
                inputChange={inputChange}
                inputValue={inputValue}
                clickAdd={newTask}
                clickClean={cleanTasks}
                selectChange={handleDay}
                selectValue={day}
            />
            <ToDoArea />
        </>
        );
 }
  
 export default Planner;