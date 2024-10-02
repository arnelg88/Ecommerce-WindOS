import React, { useState } from 'react';
import { useCart } from "../../Elements/Main/CartContext/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../Source/Data/firebaseConfig';
import './Form.css';

export const Form = () => {
    const { cart, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        confirmEmail: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    // Validar y enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.email !== formData.confirmEmail) {
            alert('Los correos electrónicos no coinciden.');
            return;
        }

        try {
            const orderRef = collection(db, "orders");
            await addDoc(orderRef, {
                ...formData,
                cart,
                total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
                createdAt: new Date(),
            });

            clearCart();
            setFormData({
                name: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                confirmEmail: ''
            });
            alert('Orden realizada con éxito');
        } catch (error) {
            console.error("Error al crear la orden: ", error);
            alert('Hubo un problema al realizar la orden');
        }
    };

    return (
        <main className="containerform">
            <div className="container">
                <div className="modal">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="separator">
                            <div className="line"></div>
                            <p>Complete los datos para finalizar su compra</p>
                            <div className="line"></div>
                        </div>

                        <div className="credit-card-info--form">
                            <div className="split">
                                <div className="input_containerr">
                                    <label className="input_label" htmlFor="name">Nombre</label>
                                    <input
                                        id="name"
                                        name="name"
                                        className="input_field"
                                        type="text"
                                        placeholder="Escriba su nombre"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input_container">
                                    <label className="input_label" htmlFor="lastName">Apellido</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        className="input_field"
                                        type="text"
                                        placeholder="Escriba su apellido"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="split">
                                <div className="input_containerr">
                                    <label className="input_label" htmlFor="email">Correo</label>
                                    <input
                                        id="email"
                                        name="email"
                                        className="input_field"
                                        type="email"
                                        placeholder="@correo.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input_container">
                                    <label className="input_label" htmlFor="confirmEmail">Verificar correo</label>
                                    <input
                                        id="confirmEmail"
                                        name="confirmEmail"
                                        className="input_field"
                                        type="email"
                                        placeholder="@correo.com"
                                        value={formData.confirmEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="input_container">
                                <label className="input_label" htmlFor="phoneNumber">Número de contacto</label>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    className="input_field"
                                    type="text"
                                    placeholder="+54 9 11 ####-####"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className="purchase--btn">Realizar compra</button>
                    </form>
                </div>
            </div>
        </main>
    );
};
