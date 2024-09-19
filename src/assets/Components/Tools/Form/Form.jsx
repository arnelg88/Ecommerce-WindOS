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
                <div className="heading">Termina tu compra..</div>
                <form className="form" id="pedidoForm" onSubmit={handleSubmit}>
                    <input
                        placeholder="Nombre"
                        id="name"
                        name="name"
                        type="text"
                        className="inputform"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        placeholder="Apellido"
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="inputform"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        placeholder="Número de teléfono"
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        className="inputform"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <input
                        placeholder="Correo"
                        id="email"
                        name="email"
                        type="email"
                        className="inputform"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        placeholder="Confirmar Correo"
                        id="confirmEmail"
                        name="confirmEmail"
                        type="email"
                        className="inputform"
                        value={formData.confirmEmail}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="submit"
                        className="login-button"
                        value="Enviar"
                    />
                </form>
            </div>
        </main>
    );
};
