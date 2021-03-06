import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./index.scss";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Sidebar = ({ isOpen, toggle, logOut }) => {
  const isAdminString = cookies.get("isAdmin");
  const isAdmin = isAdminString === "true" ? true : false;
  const [isLogged, setisLogged] = useState(false);

  useEffect(() => {
    if (cookies.get('username')) {
      setisLogged(true);
    }
    else {
      setisLogged(false)
    }
  }, []);

  if (isOpen) {
    return (
      <>
        <aside className={isOpen ? "SidebarContainerClosed" : null}>
          <Container>
            <div className="Icon" onClick={toggle}>
              <FaTimes className="CloseIcon"></FaTimes>
            </div>
            <div className="SidebarWrapper">
              <ul className="SidebarMenu">
                <Link className="SidebarLink" to="/pueblosmagicos">
                  Pueblos Mágicos
                </Link>
                {isAdmin ? (
                  <Link className="SidebarLink" to="/dashboard">
                    Dashboard
                  </Link>
                ) : null}
                <Link className="SidebarLink" to="/comunidad">
                  Comunidad
                </Link>
                <Link className="SidebarLink" to="/sobreNosotros">
                  Sobre Nosotros
                </Link>
              </ul>
              {!isLogged ?
                (<><div className="SideBtnWrap">
                  <Link className="SidebarRouteLogIn" to="/iniciarsesion">
                    Iniciar Sesión
                </Link>
                </div>
                  <div className="SideBtnWrap">
                    <Link className="SidebarRouteSignUp" to="registrate">
                      Regístrate
                </Link>
                  </div></>) :
                (<div className="SideBtnWrap">
                  <Link to="/perfil">
                  <Button className="LogOutButton">
                    Mi perfil
                </Button>
                </Link>
                  <Button className="LogOutButton" onClick={logOut}>
                    Cerrar Sesión
                </Button>
                </div>)}
            </div>
          </Container>
        </aside>
      </>
    );
  }
  return null;
};

Sidebar.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default Sidebar;
