import React from "react";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import { formInitialValues, validationSchema } from "./helpers";
import classes from "./Event.module.css";

export const EventForm = ({ onSubmitForm }) => {
  const [events, setEvents] = useState();
  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const response = await fetch(`http://localhost:4000/api/v1/events`);
    const events = await response.json();
    setEvents(events);
  };

  const handleSubmitEventForm = async (values) => {
    const {
      title,
      address,
      city,
      category,
      contact_no,
      external_link,
      date_time,
      organised_by,
      long_desc,
      short_desc,
      lat,
      lon,
      insta_profile,
      youtube_profile,
      fb_profile,
    } = values;

    const bodyData = {
      title,
      longDescription: long_desc,
      shortDescription: short_desc,
      city,
      address,
      // @TODO add created by Field. The name should be using using stored session
      createdBy: organised_by,
      organizedBy: organised_by,
      contactNum: contact_no,
      category,
      externalLink: external_link,
      lat,
      lon,
      eventDateTime: date_time,
      instagramLink: insta_profile,
      youtubeLink: youtube_profile,
      facebookLink: fb_profile,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/events/addNewEvent",
        bodyData
      );
      console.log("Response", response);
      onSubmitForm();
    } catch (err) {
      console.log("Error Occured while submitting", err);
    }
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: formInitialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmitEventForm,
  });

  if (!events) return null;
  return (
    <div className={classes.wrapper}>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <Box display='flex' columnGap='10px' marginY='10px'>
          <TextField
            name='title'
            label='Title'
            size='small'
            onChange={handleChange}
            value={values.title}
            error={Boolean(errors.title)}
            helperText={errors.title}
            style={{ flex: "2 1 0" }}
          />
          <TextField
            name='category'
            id='outlined-size-small'
            label='Category'
            size='small'
            onChange={handleChange}
            value={values.category}
            error={touched.category && Boolean(errors.category)}
            helperText={touched.category && errors.category}
            style={{ flex: "1 1 0" }}
          />
        </Box>
        <TextField
          name='short_desc'
          fullWidth
          id='outlined-multiline-static'
          label='Short Description'
          margin='dense'
          multiline
          rows={1}
          onChange={handleChange}
          value={values.short_desc}
          error={Boolean(errors.short_desc)}
          helperText={errors.short_desc}
        />
        <TextField
          name='address'
          fullWidth
          label='Address'
          id='outlined-size-small'
          size='small'
          margin='dense'
          onChange={handleChange}
          value={values.address}
          error={Boolean(errors.address)}
          helperText={errors.address}
        />
        <Box display='flex' columnGap='10px' marginY='10px'>
          <TextField
            name='city'
            id='outlined-size-small'
            label='City'
            size='small'
            margin='dense'
            onChange={handleChange}
            value={values.city}
            error={touched.city && Boolean(errors.city)}
            helperText={touched.city && errors.city}
            style={{ flex: "1 1 0" }}
          />

          <TextField
            name='date_time'
            fullWidth
            id='outlined-size-small'
            label='Date & Time'
            size='small'
            margin='dense'
            onChange={handleChange}
            value={values.date_time}
            error={touched.date_time && Boolean(errors.date_time)}
            helperText={touched.date_time && errors.date_time}
            style={{ flex: "1 1 0" }}
          />
        </Box>
        <TextField
          name='long_desc'
          fullWidth
          id='outlined-multiline-static'
          label='Long Description'
          margin='dense'
          multiline
          rows={2}
          onChange={handleChange}
          value={values.long_desc}
          error={Boolean(errors.long_desc)}
          helperText={errors.long_desc}
        />

        <Box display='flex' columnGap='10px' marginY='10px'>
          <TextField
            name='organised_by'
            fullWidth
            id='outlined-size-small'
            label='Organised By'
            size='small'
            margin='dense'
            onChange={handleChange}
            value={values.organised_by}
            error={Boolean(errors.organised_by)}
            helperText={errors.organised_by}
            style={{ flex: "1 1 0" }}
          />
          <TextField
            name='contact_no'
            id='outlined-size-small'
            label='Contact No'
            size='small'
            margin='dense'
            onChange={handleChange}
            value={values.contact_no}
            error={Boolean(errors.contact_no)}
            helperText={errors.contact_no}
            style={{ flex: "1 1 0" }}
          />
        </Box>

        <Box display='flex' columnGap='10px' marginY='10px'>
          <TextField
            name='lat'
            id='outlined-size-small'
            label='Lat'
            size='small'
            margin='dense'
            onChange={handleChange}
            value={values.lat}
            error={touched.lat && Boolean(errors.lat)}
            helperText={touched.lat && errors.lat}
            style={{ flex: "1 1 0" }}
          />

          <TextField
            name='lon'
            id='outlined-size-small'
            label='Long'
            size='small'
            margin='dense'
            onChange={handleChange}
            value={values.lon}
            error={touched.lon && Boolean(errors.lon)}
            helperText={touched.lon && errors.lon}
            style={{ flex: "1 1 0" }}
          />
        </Box>

        <h3>Links</h3>

        <Box display='flex' columnGap='10px' marginY='10px'>
          <Box display='flex' alignItems='flex-end' style={{ flex: "1 1 0" }}>
            <FacebookRoundedIcon sx={{ color: "#4267B2", mr: 1, my: 0.5 }} />
            <Input
              name='fb_profile'
              id='outlined-size-small'
              label='Facebook'
              size='small'
              onChange={handleChange}
              value={values.fb_profile}
              error={Boolean(errors.fb_profile)}
              helperText={errors.fb_profile}
            />
          </Box>
          <Box display='flex' alignItems='flex-end' style={{ flex: "1 1 0" }}>
            <InstagramIcon sx={{ color: "#3f7s9b", mr: 1, my: 0.5 }} />
            <Input
              name='insta_profile'
              id='outlined-size-small'
              label='Instagram'
              size='small'
              onChange={handleChange}
              value={values.insta_profile}
              error={Boolean(errors.insta_profile)}
              helperText={errors.insta_profile}
            />
          </Box>
        </Box>

        <Box display='flex' columnGap='10px' marginY='10px'>
          <Box display='flex' alignItems='flex-end'>
            <YouTubeIcon sx={{ color: "#c4302b", mr: 1, my: 0.5 }} />
            <Input
              name='youtube_profile'
              id='outlined-size-small'
              label='Youtube'
              size='small'
              onChange={handleChange}
              value={values.youtube_profile}
              error={Boolean(errors.youtube_profile)}
              helperText={errors.youtube_profile}
              style={{ flex: "1 1 0" }}
            />
          </Box>
        </Box>
        <Input
          name='external_link'
          id='outlined-size-small'
          fullWidth
          label='External Link'
          placeholder='Other link'
          size='small'
          onChange={handleChange}
          value={values.external_link}
          error={Boolean(errors.external_link)}
          helperText={errors.external_link}
          style={{ flex: "1 1 0", margin: "10px 0" }}
        />
        <Box display='flex' justifyContent='center'>
          <Button size='small' type='submit' variant='contained'>
            Submit Now
          </Button>
        </Box>
      </form>
    </div>
  );
};
