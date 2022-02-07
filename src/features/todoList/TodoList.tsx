import React, { useState } from 'react';
import Styles from './TodoList.module.css';

export function TodoList() {

    type listItem = {
        text: string,
        id: number
        active: boolean
    }
    const [todos, setTodos] = useState<listItem[]>([]);

    
    const todoListItems = todos.map((todo, i) => {
        const classNames = {
            
        }
     return (
        <li key={todo.id} className={`${Styles.todoListItem} ${todo.active ? Styles.activeTodo : null}`} onClick={() => setActiveTodo(todo.id)}><span>{i + 1} - {todo.text}</span> 
            <button type='button' className={Styles.removeListItemButton} onClick={() => removeListItem(todo.id)}>x</button>
        </li>
    )   
    })

    const setActiveTodo = (id:number):void => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) todo.active = !todo.active
            return todo
        })
        setTodos(updatedTodos);
        return;
    }
 
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
            setTodos([...todos, {text: value, id: getId(), active: false},]);
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
                {todos.length ? <ul>{todoListItems}</ul> : null}
            </div>
        </div>
    )
}