import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(1);

    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

            <button className="btn btn-primary" onClick={ () => increment(5) }>+5</button>
            <button className="btn btn-primary" onClick={ reset }>Reset</button>
            <button className="btn btn-primary" onClick={ () => decrement(10) }>-10</button>
        </>
    )
}
