import React from "react";
import { Link } from "gatsby";
import whatsapp from "../img/whatsapp.png";
import phone from "../img/phone.png";
import logo from "../img/glasses.jpg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{ height: "4em" }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/about">
                Nosotros
              </Link>
              <Link className="navbar-item" to="/products">
                Lentes Esclerales
              </Link>
              <Link className="navbar-item" to="/contact">
                Contacto
              </Link>
              <Link className="navbar-item" to="/blog" >
                Blog
              </Link>
              <Link className="navbar-item" to="/contact/examples" style={{display: "none"}} >
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://wa.me/525563327093"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={whatsapp} alt="Whatsapp" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="tel:5563327093"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={phone} alt="Phone" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
