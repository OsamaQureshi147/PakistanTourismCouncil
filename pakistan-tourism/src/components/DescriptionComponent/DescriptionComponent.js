import React from "react";

import classes from "./Description.module.css";
import lake_saifulmalook from "../../assests/images/saif-ul-malook.png";

import Slider from "react-slick";
import { ListItem } from "./ListItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const DescriptionComponent = (props) => {
  let settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className={classes.description}>
      <h2> Saif ul Mulooq </h2>

      <div className={classes.wrapper}>
        <div className={classes.img_wrapper}>
          <hr />
          <div className={classes.slideclass}>
            <Slider {...settings}>
              <div>
                <img
                  src={lake_saifulmalook}
                  className={classes.mainimg}
                  alt='main Picture'
                />
              </div>
              <div>
                <img
                  src={lake_saifulmalook}
                  className={classes.mainimg}
                  alt='main Picture'
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className={classes.text_wrapper}>
          <h4>Introduction</h4>
          <p>
            The Temple, also known as Sri Harmandir Sahib ("abode of God") or
            Darbar Sahib, (Punjabi pronunciation: [dəɾbɑɾ sɑhɪb], "exalted holy
            court"), is a Gurdwara located in the city of Amritsar, Punjab,
            India.After Gurdwara Janam Asthan, the birthplace of Sikhism, this
            temple is the most important pilgrimage site of Sikhism. The temple
            is built around a man-made pool (sarovar) that was completed by Guru
            Ram Das in 1577.{" "}
          </p>
        </div>
      </div>
      <div className={classes.text_wrapper}>
        {props.data.map((e) => {
          return <ListItem heading={e.heading} description={e.description} />;
        })}
      </div>
    </div>
  );
};
