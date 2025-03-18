import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('todosStorage')) || [];
};

export const useTodo = () => {
    
    const [ todos, dispatch ] = useReducer( todoReducer , [], init )

    useEffect(() => {
        localStorage.setItem('todosStorage', JSON.stringify( todos ));
    
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleRemoveTodo = ( id ) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatch( action );
    }

    const onToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    const todosCount = todos.length;

    const todosPending = todos.filter( todo => !todo.done ).length;

    return {
        handleNewTodo,
        handleRemoveTodo,
        onToggleTodo,
        todos,
        todosCount, 
        todosPending,
    }
}

