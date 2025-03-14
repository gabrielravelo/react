import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value.toLowerCase() );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newValue = inputValue.trim();
    if ( newValue.length <= 1 ) return;

    // setCategories( categories => [inputValue, ...categories]);
    onNewCategory( newValue );
    setInputValue('');
  }

  return (

    <form onSubmit={ onSubmit } aria-label='form'>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
