import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createEvent, updateEvent } from "../../../redux/slices/eventSlice";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../components/partials/Loading";
import { getAllCategories } from "../../../redux/slices/catSlice";
import { EventSchema } from "../../../validators/eventValidation";

export default function EventForm() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const action = location.state || "create";
  const { loading, event } = useSelector((state) => state.events);
  const formik = useFormik({
    initialValues:
      action === "create"
        ? {
            title: "",
            description: "",
            eventDate: "",
            price: "",
            eventPicture: "",
            location: "",
            tickets: "",
          }
        : {
            id: event._id,
            title: event.title,
            description: event.description,
            eventDate: event.eventDate,
            price: event.price,
            eventPicture: event.eventPicture,
            location: event.location,
            tickets: event.tickets,
          },
    validationSchema: EventSchema,
    onSubmit: (values, actions) => {
      // alert(JSON.stringify(values));
      if (action === "create") {
        dispatch(createEvent(values));
      }
      if (action === "update") {
        dispatch(updateEvent(values));
      }
      navigate("/events_table");
    },
  });
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const formatDateForInput = (date) => {
    const offset = new Date().getTimezoneOffset();
    const adjustedDate = new Date(date.getTime() - (offset * 60 * 1000));
    return adjustedDate.toISOString().slice(0, 16);
  };
  return (
    <div className="px-10 py-5 h-screen overflow-hidden">
      <div className="bg-border/20 h-full rounded-xl flex flex-col p-3 gap-5">
        <div className="border-b-4 py-1 border-border h-14 pr- flex justify-between">
          <p className="font-bold text-4xl capitalize">
            {action === "create" ? "Add Event" : "Update " + event.title}
          </p>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full h-full  rounded-xl overflow-y-auto p-5"
        >
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="flex gap-5 py-5">
                <TextField
                  fullWidth
                  id="title"
                  name="title"
                  label="Event Title"
                  color="secondary"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                />
                <TextField
                  className="text-white"
                  fullWidth
                  id="location"
                  name="location"
                  label="Event Location"
                  color="secondary"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.location && Boolean(formik.errors.location)
                  }
                  helperText={formik.touched.location && formik.errors.location}
                />
                <TextField
                  fullWidth
                  id="tickets"
                  name="tickets"
                  label="Tickets"
                  color="secondary"
                  type="number"
                  value={formik.values.tickets}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.tickets && Boolean(formik.errors.tickets)
                  }
                  helperText={formik.touched.tickets && formik.errors.tickets}
                />
              </div>
              <div className="flex gap-5">
                <TextField
                  fullWidth
                  type="number"
                  id="price"
                  name="price"
                  label="Event Price"
                  color="secondary"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.price && Boolean(formik.errors.price)}
                  helperText={formik.touched.price && formik.errors.price}
                />
                <TextField
                  fullWidth
                  id="eventDate"
                  name="eventDate"
                  color="secondary"
                  type="datetime-local"
                  value={formik.values.eventDate ? formatDateForInput(new Date(formik.values.eventDate)) : ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.eventDate && Boolean(formik.errors.eventDate)
                  }
                  helperText={
                    formik.touched.eventDate && formik.errors.eventDate
                  }
                />
                <div className="flex flex-col justify-center relative w-full min-w-[200px]">
                  <FileBase
                    type="file"
                    name="eventPicture"
                    multiple={false}
                    onDone={({ base64 }) =>
                      formik.setFieldValue("eventPicture", base64)
                    }
                  />
                  <div className="text-left pl-4 text-sm text-red mt-1">
                    {formik.touched.eventPicture && formik.errors.eventPicture}
                  </div>
                </div>
              </div>
              <div className="w-full py-5">
                <ReactQuill
                  onChange={(e) => formik.setFieldValue("description", e)}
                  value={formik.values.description}
                  theme="snow"
                  style={{ height: "280px" }}
                />
                <div className="text-left pl-4 text-sm text-red mt-1">
                  {formik.touched.description && formik.errors.description}
                </div>
              </div>
              <div className="flex justify-end w-full pt-8">
                <button
                  className="flex items-center gap-2 bg-purple text-white py-2 px-5 rounded"
                  type="submit"
                >
                  <Icon icon="material-symbols:save" />
                  SUBMIT
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
