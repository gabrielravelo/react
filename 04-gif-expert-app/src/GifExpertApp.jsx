import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Piece', '2do elemento' ]);

  const onAddCategory = () => {
    setCategories([ 'Valorant', ...categories ]);
    // setCategories( cat => [ ...cat, 'Valorant' ] );
  };

  // console.log( categories );

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory />
        {/* <input /> */}

        {/* Listado de Gif */}
        <button onClick={ onAddCategory }>
          Agregar
        </button>
        <ol>
          { 
            categories.map( category => {
              return <li key={ category } >{ category }</li>
            }) 
          }
        </ol>
            {/* Gif item */}

        
    </>
  )
}

