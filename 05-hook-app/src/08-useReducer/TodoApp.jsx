import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks/useTodo';


export const TodoApp = () => {
    
    const { handleNewTodo, handleRemoveTodo, onToggleTodo, todos, todosCount, todosPending } = useTodo();

    return (
        <>
            <h1>TodoApp: { todosCount }, <small>pendientes: { todosPending }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos } onRemoveTodo={ handleRemoveTodo } onToggleTodo={ onToggleTodo } />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd handleNewTodo={ handleNewTodo } />
                </div>

            </div>

        </>
    )
}

