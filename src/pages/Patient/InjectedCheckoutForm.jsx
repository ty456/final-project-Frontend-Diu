import {
  CardElement,
  Elements,
  ElementsConsumer,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

// const stripePromise = loadStripe(
//   "pk_test_51L4qtiHV1IREXgYtmCb8rFNfrS5OLqcOpZGbZk3Ro6BITBAFvsbyS0zt450rJSZhCVrU4hcn68FxBmc6djA1KfQT00Tmj3CxWL"
// );
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log(error, paymentMethod);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {/* <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button> */}
    </form>
  );
};

const stripePromise = loadStripe(
  "pk_test_51L4qtiHV1IREXgYtmCb8rFNfrS5OLqcOpZGbZk3Ro6BITBAFvsbyS0zt450rJSZhCVrU4hcn68FxBmc6djA1KfQT00Tmj3CxWL"
);

const InjectedCheckoutForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default InjectedCheckoutForm;
