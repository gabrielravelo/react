// import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle }) => {
  
    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subTitle }</p>
            {/* <h1>{ JSON.stringify( newMessage ) }</h1> */}
            <p>Soy un subtitulo</p>
        </>
    )
}

// FirstApp.propTypes = {
//     title: PropTypes.string
// }

