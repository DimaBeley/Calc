import React, { useState } from 'react';
import Styles from './Calculator.module.css';

export function Calculator() {
    const [screenField, setScreenField] = useState('');
    
    const  handleSubmit = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            screenField: {value: string}
        };
        const {value} = target.screenField;

        setScreenField(screenField.concat(` ${value}`));
        target.screenField.value = '';
    }


    return (
        <div>    
            <form onSubmit={handleSubmit}>
                <input type="text" className="text" name="screenField"/>

                <input type="submit" value="↵"/>
            </form>
            <div className={Styles.Calculator}>
                <span>{screenField}</span>
            </div>
        </div>
    )
}