import { useNavigate, useSearchParams } from 'react-router';
import { useForm } from '../../hooks';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components';


const HeroAlert = ({ heroes, query }) => {
    if( heroes.length === 0 && query.length > 1 ) {
        return (
            <div className="alert alert-danger">
                No hero with <b>{ query }</b>
            </div>
        );
    }

    if( heroes.length === 0 && query.length === 0 ) {
        return (
            <div className="alert alert-info">
                Search a hero
            </div>
        );
    }
}

export const SearchPage = () => {

    const navigate = useNavigate();

    const [ searchParams ] = useSearchParams();
    const query = searchParams.get('q') ?? '';

    const heroes = getHeroesByName(query);

    //? Traditional way
    // const [ searchText, setSearchText ] = useState('');

    // const onInputChange = ({ target }) => {
    //     setSearchText( target.value );
    // }

    // const onSubmit = ( e ) => {
    //     e.preventDefault();
    //     console.log( searchText )
    //     setSearchText('');
    // }

    //* With custom hook
    const { searchText, onInputChange, onResetForm  } = useForm({
        searchText: '',
    });

    const onSearchSubmit = ( e ) => {
        e.preventDefault();
        // if ( searchText.trim().length <= 1 ) return;

        navigate(`?q=${ searchText }`);

        onResetForm();
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={ onSearchSubmit }>
                        <input 
                            type="text" 
                            name="searchText" 
                            placeholder="Search a hero"
                            className="form-control"
                            autoComplete="off" 
                            value={ searchText }
                            onChange={ onInputChange }
                        />

                        <button
                            className="btn btn-outline-info mt-2"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {/* {
                        heroes.length === 0 
                        ?
                        (
                            <div className="alert alert-danger">
                                No hero with <b>{ query }</b>
                            </div>
                        ) 
                        :
                        (
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                        )
                    } */}
                    

                    <HeroAlert query={ query } heroes={ heroes } />
                    
                    {
                        heroes.map( hero => (
                            <HeroCard key={ hero.id } {...hero} />
                        ))
                    }

                    {/* <HeroCard /> */}
                </div>
            </div>
        </>
    )
}
