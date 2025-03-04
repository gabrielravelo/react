

// const getImagenPromesa = () => {
//     return new Promise( (resolve, reject) => {
//         resolve('https://asdasd.com');
//     });
// };

// getImagenPromesa().then( console.log );

const getImagen = async() => {
    const apiKey = 'Hyfjk22X0QNGKmLTT7HjBIKmvznsOunp';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json();
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
}

getImagen();
