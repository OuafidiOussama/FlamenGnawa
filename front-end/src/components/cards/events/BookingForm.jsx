import React, { useState } from "react";
import { useFormik } from "formik";
import { bookingSchema } from "../../../validators/bookingForm";
import { Icon } from "@iconify/react";
import { TextField } from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export default function BookingForm({ user, event, close }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePayButton = () => {

  }
  
  const formik = useFormik({
    initialValues: {
      firstName: user ? user.first_name : "",
      lastName: user ? user.last_name : "",
      phone: user ? user.phone : "",
      email: user ? user.email : "",
    },
    validationSchema: bookingSchema,
    onSubmit: async (values, actions) => {
      if (event.price !== -1) {
        // Handle payment with Stripe
        setLoading(true);
        try {
          // Create a payment intent with Stripe
          const response = await axios.post("/api/booking/book", {
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            email: values.email,
            eventId: event.id,
          });

          // Confirm the payment intent with Stripe
          const { error } = await stripe.confirmCardPayment(
            response.data.clientSecret,
            {
              payment_method: {
                card: elements.getElement(CardElement),
              },
            }
          );

          if (error) {
            setError(error.message);
            setLoading(false);
          } else {
            // Payment successful, close the form
            close();
          }
        } catch (error) {
          setError("Error processing payment. Please try again later.");
          console.error("Error:", error);
          setLoading(false);
        }
      } else {
        // Handle form submission without payment
        alert(JSON.stringify(values));
        close();
      }
    },
  });
  return (
    <div className="w-full h-screen top-0 z-20 flex justify-center items-center fixed bg-black/20">
      <Icon
        icon="carbon:close-filled"
        className="absolute top-20 right-64 cursor-pointer  text-white z-40 text-4xl"
        onClick={close}
      />
      <form
        onSubmit={formik.handleSubmit}
        className="w-3/5 h-4/6 fixed flex flex-col gap-10 top-18 rounded-xl overflow-y-auto p-10 bg-white"
      >
        <p className="text-center text-xl  text-black">
          Please Fill In the Form
        </p>
        <div className="flex gap-5">
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            color="secondary"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            color="secondary"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </div>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          color="secondary"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Phone Number"
          color="secondary"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        {event.price !== -1 && (
          <div>
            <CardElement />
            {error && <div className="error-message">{error}</div>}
          </div>
        )}
        <div className="flex justify-end w-full ">
          <button
            className="flex items-center gap-2 bg-purple text-white py-2 px-5 rounded"
            type="submit"
          >
            <Icon icon="material-symbols:save" />
            {loading ? "Processing..." : "SUBMIT"}
          </button>
        </div>
      </form>
    </div>
  );
}
