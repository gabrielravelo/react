import { getImagen } from '../../src/base-pruebas/11-async-await';


describe('Pruebas en 11-async-await', () => {

    test('getImagen debe retornar un url de la imagen', async() => {
        const url = await getImagen();
        // console.log(url);
        expect( typeof url ).toBe( 'string' );
    });

    // probar que falle el fetch
    // test('getImagen debe retornar un error si falla el fetch', async() => {
    //     const url = await getImagen();
    //     // console.log(url);
    //     expect( url ).toBe( 'No se encontro la imagen' );
    // });


});