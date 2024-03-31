import * as yup from "yup";

export const EventSchema = yup.object({
  title: yup
    .string("Enter Your Event title")
    .required("Event title Is Required"),
  description: yup
    .string("Enter Your Event Description")
    .required("Event Description Is Required"),
  eventDate: yup
    .date("Enter Your Event Date")
    .required("Event Date Is Required"),
  price: yup
    .number("Enter Your Event Price")
    .required("Event Price Is Required"),
  eventPicture: yup
    .string("Enter Your Event Picture")
    .required("Event Picture Is Required"),
  location: yup
    .string("Enter Your Event category")
    .required("Event category Is Required"),
  tickets: yup
    .number("Enter Your Event description")
    .required("Event description Is Required"),
});
