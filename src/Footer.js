//importaciones

//funcion
const Footer = (props) => {
    console.log(props);
    return (
        <div>
            <p>Hola {props.nombre}, yo soy el footer, estamos en el mes de {props.mes}</p>
        </div>
    )
};

//exportaciones
export default Footer;