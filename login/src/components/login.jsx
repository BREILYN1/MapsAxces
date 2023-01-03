import React, { Component } from "react";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Cookies from "universal-cookie";
import logo from "../img/AXCESGEO.svg";

const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();

class Login extends Component {
  state = {
    form: {
      email: "",
      password: "",
    },
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  iniciarSesion = async () => {
    await axios
      .get(baseUrl, {
        params: {
          email: this.state.form.email,
          password: this.state.form.password,
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          const respuesta = response[0];
          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("primer_apellido", respuesta.primer_apellido, {
            path: "/",
          });
          cookies.set("segundo_apellido", respuesta.segundo_apellido, {
            path: "/",
          });
          cookies.set("nombre", respuesta.nombre, { path: "/" });
          cookies.set("email", respuesta.email, { path: "/" });
          alert(`Bienvenido ${respuesta.nombre} ${respuesta.primer_apellido}`);
          window.location.href = "./menu";
        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    if (cookies.get("email")) {
      window.location.href = "./menu";
    }
  }

  render() {
    return (
      <>
        <div className="containerPrincipal">
          <div className="containerSecundario">
            <div className="form-group">
              <div class="card">
                <img src={logo} className="card-img-top" alt=".."></img>
              </div>
              <h4 className="title_login">Inicio de Sesion</h4>
              {/* email */}
              <form action="">
                <div class="form-contro">
                  <i class="fa-solid fa-envelope"></i>
                  <input
                    class="text-input"
                    type="text"
                    name="email"  
                    placeholder="Correo Electronico"
                    onChange={this.handleChange}/>
                </div>
                {/* password  */}
                <div class="form-contro">
                  <i class="fa-solid fa-lock"></i>
                  <input class="text-input"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={this.handleChange}/>
                </div>
                </form>
                {/* checkbox  */}
                <input type="checkbox" />
                 <label htmlFor="">Recuerdame</label>
                 <br />
                 {/* button login */}

                <button
                  className="btn btn-primary"
                  onClick={() => this.iniciarSesion()}
                >
                  Iniciar Sesión
                </button>
              
              <br />
              <a>¿Olvidaste la contraseña?</a>
            </div>
          </div> 
        </div>
      </>
    );
  }
}

export default Login;
