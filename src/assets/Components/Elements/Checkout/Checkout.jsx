import React from 'react';
import { Form } from "../../Tools/Form/Form";
import { Brief } from "../../Tools/Brief/Brief";

export const Checkout = () => {
  return (
    <section className="layoutContainer">
      <div>
        <Form />
      </div>
      <div className="grow12">
        <Brief />
      </div>
    </section>
  );
};