import React, { useState } from 'react';
import Styles from './Calculator.module.css';

export function Calculator() {

    type listItem = {
        todo: string,
        id: number
    }
    const [todos, setTodos] = useState<listItem[]>([]);
    const todoList = todos.map((todo, i) => (
        <li key={todo.id}>{} - {todo.todo} 
            <button type='button' className={Styles.removeListItemButton} onClick={() => removeListItem(todo.id)}>x</button>
        </li>
    ))

    const removeListItem = (index:number):void => {
        setTodos(todos.filter(todo => todo.id !== index));
    }
    
    const handleSubmit = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            screenField: {value: string}
        };
        const { value } = target.screenField;
        const id = todos.length + 1
        setTodos([...todos, {todo: value, id: id}]);
        target.screenField.value = '';
    }


    return (
        <div>    
            <form onSubmit={handleSubmit}>
                <input type="text" className="text" name="screenField"/>

                <input type="submit" value="↵"/>
            </form>
            <div className={Styles.Calculator}>
                <ul>
                    {todoList}
                </ul>
            </div>
        </div>
    )
}