import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Menu extends Component {

    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('primer_apellido', {path: "/"});
        cookies.remove('segundo_apellido', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('email', {path: "/"});
        window.location.href='./';
    }

    componentDidMount(){
        if(!cookies.get('email')){
          window.location.href="./";
        }
      }

    render() {

        console.log('id: ' + cookies.get('id' ));
        console.log('primer_apellido: ' + cookies.get('primer_apellido'));
        console.log('segundo_apellido: ' + cookies.get('segundo_apellido'));
        console.log('nombre: ' + cookies.get('nombre'));
        console.log('email: ' + cookies.get('email'));

        return (
            <>
                Menu Principal

                <br />

                <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
            </>
        );
    }
}
export default Menu;