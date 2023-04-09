import * as yup from "yup";

export const formInitialValues = {
  title: "",
  address: "",
  city: "",
  category: "",
  contact_no: "",
  external_link: "",
  date_time: "",
  organised_by: "",
  long_desc: "",
  short_desc: "",
  lat: "",
  lon: "",
  insta_profile: "",
  youtube_profile: "",
  fb_profile: "",
};

export const validationSchema = yup.object({
  title: yup.string().required().min(2).max(10),
  address: yup.string(),
  city: yup.string().required().max(30),
  category: yup.string().max(50),
  contact_no: yup.string(),
  external_link: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    ),
  insta_profile: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    ),
  youtube_profile: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    ),
  fb_profile: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    ),
  date_time: yup
    .date()
    .required("Date time is required")
    .min(new Date(), "Date must be future date"),
  organised_by: yup.string(),
  long_desc: yup.string().max(1000),
  short_desc: yup.string().max(100),
  lat: yup
    .number()
    .required("Latitude is required")
    .min(-90, "Latitude must be at least -90")
    .max(90, "Latitude must be at most 90"),
  lon: yup
    .number()
    .required("Longitude is required")
    .min(-180, "Longitude must be at least -180")
    .max(180, "Longitude must be at most 180"),
});
