import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en AddCategory', () => {


    test('debe de cambiar el valor de la caja de texto', () => {
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'one piece' } } );
        expect( input.value ).toBe('one piece');
        // screen.debug();
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'one piece';
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        expect( input.value ).toBe('');
        // screen.debug();
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form  = screen.getByRole('form');
        fireEvent.submit( form );
       
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        //? otra forma de hacerlo = expect( onNewCategory ).not.toHaveBeenCalled();
    });


});