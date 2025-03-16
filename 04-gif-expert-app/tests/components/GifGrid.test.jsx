import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en GifGrid', () => {

    const category = 'one punch';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ category } /> );
        // screen.debug();
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'one piece',
                url: 'https://localhost.com'
            },
            {
                id: '123',
                title: 'my hero academia',
                url: 'https://localhost232.com'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={ category } /> );

        expect( screen.getAllByRole('img').length ).toBe(2);
    });
});

