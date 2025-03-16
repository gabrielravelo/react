import { useLayoutEffect, useRef } from "react"


export const PokemonCard = ({ id, name, sprites = [] }) => {

    //? clase de useLayoutEffect const h2Ref = useRef()

    // useLayoutEffect(() => {
    //     const { height, width } = h2Ref.current.getBoundingClientRect();
    //     console.log({height, width});
    
    // }, [name])

    return (
        <section style={{ height: 200 }}>
            <h2 className="text-capitalize">#{id} - { name }</h2>
            
            <div>
                {
                    sprites.map( sprite => (
                        <img 
                            key={sprite}
                            src={sprite}
                            alt={name}
                        />
                    ))
                }
            </div>
        </section>
    )
}
