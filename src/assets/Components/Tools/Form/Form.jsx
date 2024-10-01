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

    // Manejar cambios en el formulario
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
           <div class="modal">
  <form class="form">
    <div class="separator">
      <div class="line"></div>
      <p>Complete los datos para finalizar su compra</p>
      <div class="line"></div>
    </div>

    <div class="credit-card-info--form">
    <div class="split">
        <div class="input_containerr">
          <label class="input_label" for="name">Nombre</label>
          <input id="name" class="input_field" type="text" placeholder="Escriba su nombre" required />
        </div>
        <div class="input_container">
          <label class="input_label" for="lastName">Apellido</label>
          <input id="cvv" class="input_field" type="text" placeholder="Escriba su apellido" required />
        </div>
      </div>
      <div class="split">
        <div class="input_containerr">
          <label class="input_label" for="email">Correo</label>
          <input id="email" class="input_field" type="email" placeholder="@correo.com" required />
        </div>
        <div class="input_container">
          <label class="input_label" for="cvv">Verificar correo</label>
          <input id="emailverifique" class="input_field" type="email" placeholder="@correo.com" required />
        </div>
      </div>

      <div class="input_container">
        <label class="input_label" for="cardholder-name">Numero de contacto</label>
        <input id="cardholder-name" class="input_field" type="text" placeholder="+54 9 11 ####-####"/>
      </div>
    </div>
    <button type="submit" class="purchase--btn">Realizar compra</button>
  </form>
</div>
</div>
        </main>
    );
};
