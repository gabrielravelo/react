import { useState } from "react"
import { useForm } from "../hooks/useForm"


export const TodoAdd = ({ handleNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();

        const newValue = description.trim();

        if( newValue.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }
        handleNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text"
                placeholder="Agrega un TODO" 
                className="form-control"
                name="description" 
                value={ description }
                onChange={ onInputChange }
            />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-2"
            >
                Agregar
            </button>
        </form>
    )
}

