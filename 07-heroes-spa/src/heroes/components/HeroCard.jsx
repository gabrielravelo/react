import { Link } from 'react-router';

const CharactersByHero = ({alter_ego, characters}) => {
    if ( alter_ego === characters ) return (<></>);
    return (<p>{ characters }</p>);
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    
    const heroImageUrl =  `https://gabrielravelo.github.io/heroes-react-spa/heroes/${ id }.jpg`;
    // const charactersByHero = (<p>{ characters }</p>);

    return (
        <div className="col animate__animated animate__fadeInUp">
            <div className="card">
                
                <div className="row no-gutter">
                    <div className="col-4">
                        <img src={ heroImageUrl } className="card-img" alt={ superhero } />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>

                            <p className="card-text">{ alter_ego }</p>
                            
                            {/* {
                                ( alter_ego !== characters ) && charactersByHero
                                ( alter_ego !== characters ) && (<p>{ characters }</p>)
                            } */}

                            <CharactersByHero alter_ego={ alter_ego } characters={ characters } />

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${ id }`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
