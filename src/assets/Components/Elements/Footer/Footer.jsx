import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="layout_footer">
                <div className="layout_list">
                    <div>
                        <h5>MI CUENTA</h5>
                        <ul>
                            <li className='separationText'><a className='colorStyle'>Mi pedido</a></li>
                            <li className='separationText'><a className='colorStyle'>Modificar mis datos</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>SERVICIO AL CLIENTE</h5>
                        <ul>
                            <li className='separationText'><a className='colorStyle'>Post-Venta</a></li>
                            <li className='separationText'><a className='colorStyle'>Política de cambios</a></li>
                            <li className='separationText'><a className='colorStyle'>Garantía</a></li>
                            <li className='separationText'><a className='colorStyle'>Más...</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>PROMOCIONES</h5>
                        <ul>
                            <li className='separationText'><a className='colorStyle'>Formas de pago</a></li>
                            <li className='separationText'><a className='colorStyle'>Marcas</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>NECXUS</h5>
                        <ul>
                            <li className='separationText'><a className='colorStyle'>¿Quiénes somos?</a></li>
                            <li className='separationText'><a className='colorStyle'>Contacto</a></li>
                        </ul>
                    </div>
                </div>
                <div className='center page-legal'>
                    <p>© 2024 Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
