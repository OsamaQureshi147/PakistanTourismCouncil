import React from "react";

import classes from "./Description.module.css";
import lake_saifulmalook from "../../assests/images/saif-ul-malook.png";
import { ListItem } from "./ListItem";
export const DescriptionComponent = (props) => {
  return (
    <div className={classes.description}>
      <h2> Saif ul Mulooq </h2>
      <div className={classes.wrapper}>
        <div className={classes.img_wrapper}>
          <img src={lake_saifulmalook} alt= "main Picture"/>
        </div>
        <div className={classes.text_wrapper}>
          <h4>Description</h4>
          <p>
            {" "}
            The Golden Temple, also known as Sri Harmandir Sahib ("abode of
            God") or Darbar Sahib, (Punjabi pronunciation: [dəɾbɑɾ sɑhɪb],
            "exalted holy court"), is a Gurdwara located in the city of
            Amritsar, Punjab, India.After Gurdwara Janam Asthan, the birthplace
            of Sikhism, this temple is the most important pilgrimage site of
            Sikhism. The temple is built around a man-made pool (sarovar) that
            was completed by Guru Ram Das in 1577.{" "}
          </p>
          <h4>Also Known as</h4>
          <ul>
            <li> First Name</li>
            <li> Second Name</li>
            <li> Last Name</li>
          </ul>
        </div>
      </div>
      <div>
        <h3>Related Image</h3>
      <div className={classes.Related_image}>
        <h6>Related Image</h6>
        <h6>Related Image</h6>
        <h6>Related Image</h6>
        <h6>Related Image</h6>
      </div>
      </div>
    </div>
  );
};
