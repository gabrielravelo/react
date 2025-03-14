import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';


describe('Pruebas en <GifItem />', () => {

    const title = 'Gabo';
    const url = 'https://gabrielravelo.com/';

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem title={ title } url={ url } /> );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url);
        expect( alt ).toBe( title );
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
    });

    test('debe de mostrar el titulo en el componente', () => {
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    });

});