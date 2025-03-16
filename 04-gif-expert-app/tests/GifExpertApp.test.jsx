import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
import { AddCategory } from '../src/components';


describe('pruebas en GifExpertApp', () => {
    const inputValue = 'one piece';
    
    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <GifExpertApp /> );
        expect( container ).toMatchSnapshot();
    });

    test('debe haber 3 resultados', () => {
        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: inputValue + 2 } } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: inputValue + 3 } } );
        fireEvent.submit( form );

        expect( screen.getAllByRole('heading', { level: 3} ).length ).toBe(3);
    });

    test('debe haber 1 resultado unico', () => {
        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( screen.getAllByRole('heading', { level: 3} ).length ).toBe(1);
    });
});