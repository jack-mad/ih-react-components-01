//importaciones

//funcion
const Header = (props) => {
    console.log(props);
    return (
        <header>
            <p>Este es el header</p>
            <p>Hola {props.nombre}</p>
        </header>
    )
};

//exportaciones
export default Header;