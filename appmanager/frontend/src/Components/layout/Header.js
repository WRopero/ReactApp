import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import img from '../../images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


export class Header extends Component {
      
    render() {

        return (
            <div className="mt-0 pb-5" style={{display:"flex"}}>
                <div 
                    className="d-flex align-items-center" 
                    style={{position:"fixed", width:"100%" , height:"3.5rem", zIndex:"5", background:"#440099", color: "#440099"}}>
                    <Navbar collapseOnSelect expand="lg" bg="#440099" variant="dark" style={{width:"100%", height:"3.5rem"}}>
                        <Navbar.Brand className='ml-5'>
                            <Link to="/">
                                <img src={img} className="pr-1" style={{width:"4.5rem", 
                                                                        height:"2.3rem", 
                                                                        background:'#d0d0d0', 
                                                                        borderRadius:"8px", 
                                                                        border:"3px"}} ></img>   
                            </Link>                 
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link>                        
                                    <Link to="/adminbd" style={{textDecoration:"none"}}>
                                        <p className="h6" style={{color:'#cdc6c3', marginTop:".6rem"}}>Admin Dig</p>                                
                                    </Link>
                                </Nav.Link>


                                <Nav.Link>                        
                                    <Link to="/Paratec" style={{textDecoration:"none"}}>
                                        <p className="h6" style={{color:'#cdc6c3', marginTop:".6rem"}}>Paratec</p>                                
                                    </Link>
                                </Nav.Link>



                                <NavDropdown title="Nosotros" id="collasible-nav-dropdown" style={{marginTop:".6rem", marginLeft:".8rem"}}>
                                    <NavDropdown.Item >
                                        <Link to="/about" style={{textDecoration:"none"}}>
                                            <p style={{color:'black', height:".8rem"}}>Acerca de</p>
                                        </Link>                                
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/contact" style={{textDecoration:"none"}}>                                    
                                            <p style={{color:'black', height:".8rem"}}>Contacto</p>
                                        </Link>                                
                                        </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="https://www.xm.com.co/Paginas/Home.aspx">Ir a XM</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className='mr-5'>
                                <button 
                                    className="btn btn-primary font-weight-bold p-1 m-1"
                                    style={{width:"8rem",  
                                            borderRadius:"12px", 
                                            background:'#d0d0d0',
                                            color: '#ff5713', 
                                            border:"5px", 
                                            height:"2rem"}}
                                    >Iniciar Sesión
                                </button>
                                <button 
                                    className="btn btn-primary font-weight-bold p-1 m-1"
                                    style={{width:"6rem",  
                                            borderRadius:"12px", 
                                            background:'#d0d0d0', 
                                            color: '#ff5713',
                                            border:"5px", 
                                            height:"2rem"}}
                                    >Registrarse
                                </button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}


export default Header;
