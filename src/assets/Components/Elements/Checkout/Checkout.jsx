import React from 'react';
import { Form } from "../../Tools/Form/Form";
import { Brief } from "../../Tools/Brief/Brief";

export const Checkout = () => {
  return (
    <section className="layoutContainer">
      <div className="grow12">
        <Brief />
      </div>
      <div>
        <Form />
      </div>
    </section>
  );
};