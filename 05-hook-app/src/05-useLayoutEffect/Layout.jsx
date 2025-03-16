import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

export const Layout = () => {

    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

    const spriteUrls = data ? Object.values(data.sprites).filter(url => typeof url === 'string') : [];

    return (
        <>
            <h1>Información de Pokemon</h1>
            <hr />

            { 
                isLoading 
                ? <LoadingMessage />
                : <PokemonCard id={ data?.id } name={ data?.name } sprites={ spriteUrls } /> 
            }

            {/* <h2>{ data?.name }</h2> */}

            <button
                onClick={ () => counter > 1 ? decrement() : null }
                className="btn btn-primary mt-2"
            >
                Anterior
            </button>

            <button
                onClick={ () => increment() }
                className="btn btn-primary mt-2"
            >
                Siguiente
            </button>
        </>
    )
}
