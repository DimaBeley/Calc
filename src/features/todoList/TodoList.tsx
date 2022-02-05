import React, { useState } from 'react';
import Styles from './TodoList.module.css';

export function TodoList() {

    type listItem = {
        text: string,
        id: number
    }
    const [todos, setTodos] = useState<listItem[]>([]);
    const todoList = todos.map((todo, i) => (
        <li key={todo.id}> {i + 1} - {todo.text} 
            <button type='button' className={Styles.removeListItemButton} onClick={() => removeListItem(todo.id)}>x</button>
        </li>
    ))
 
    const removeListItem = (id:number):void => {
        setTodos(todos.filter(todo => todo.id !== id));
        return;
    }
    
    const handleSubmit = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            screenField: {value: string}
        };
        const { value } = target.screenField;

        const getId = () => {
            return Date.now();
        }

        if (value) {
            setTodos([...todos, {text: value, id: getId()}]);
            target.screenField.value = '';
        } 
        return;
    }


    return (
        <div>   
            <form onSubmit={handleSubmit} className={Styles.listForm}>
                <input type="text" className={Styles.textInput} name="screenField"/>
                <input type="submit" className={Styles.submitBtn} value="↵"/>
            </form>
            <div className={Styles.todoList}>
                <ul>
                    {todoList}
                </ul>
            </div>
        </div>
    )
}