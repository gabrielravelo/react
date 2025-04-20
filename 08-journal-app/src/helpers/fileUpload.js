
export const fileUpload = async( file ) => {
    if ( !file ) throw new Error('No tenemos ningún archivo a subir.');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dbfgjl8up/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( !resp.ok ) throw new Error('No se pudo subir imagen');

        const cloudResponse = await resp.json();

        return cloudResponse.secure_url;
    } catch (err) {
        console.log( err );
        throw new Error( err.message );
    }

}

