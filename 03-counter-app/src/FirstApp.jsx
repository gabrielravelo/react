import PropTypes from 'prop-types';

const newMessage = {
    title: 'Hola Mundo',
};

const getSaludo = () => {
    return 'Hola Mundo';
}

export const FirstApp = ({ title, subTitle }) => {
  
    return (
        <>
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
            {/* <h1>{ JSON.stringify( newMessage ) }</h1> */}
            <p>Soy un subtitulo</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string
}

