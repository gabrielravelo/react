import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
  
    test('usContext debe de retornar un objeto', () => {
        
        const obj = {
            clave: 'nombre',
            edad: 21,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        } 

        const objContext = usContext(obj);

        const { clave, edad, latlng } = obj;
        // console.log(latlng);

        expect( objContext ).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: latlng.lat,
                lng: latlng.lng
            }
        });
    })
});



