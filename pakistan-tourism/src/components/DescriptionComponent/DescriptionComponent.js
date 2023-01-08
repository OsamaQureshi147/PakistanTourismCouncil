import React from "react";

import classes from "./Description.module.css";
import lake_saifulmalook from "../../assests/images/saif-ul-malook.png";
export const DescriptionComponent = () => {
  return (
    <div>
      <div className={classes.row}>
        <div className={classes.leftcolumn}>
          <div className={classes.card}>
            <br></br>
            {/* <h5>Title description, Dec 7, 2017</h5> */}
            {/* <div className={classes.fakeimg} > */}
            <img src={lake_saifulmalook} alt="images4" />
            <p className={classes.credit}>
              (Image Credit :
              <a href="https://www.google.com" target="_blank">
                Danish)
              </a>
            </p>

            <br />
            <br />
            <h2>Saif-Ul-Malook lake</h2>

            {/* <div className={classes.fakeimg}  style="height:200px;"> */}

            {/* </div> */}
            <br />
            <br />
            <div className={classes.paragragh}>
              <p>
                Saiful Muluk is a mountainous lake located at the northern end
                of the Kaghan Valley, near the town of Naran in the Saiful Muluk
                National Park. At an elevation of 3,224 m (10,578 feet) above
                sea level, the lake is located above the tree line, and is one
                of the highest lakes in Pakistan.
              </p>
              <br></br>
              <h3>Location</h3>
              <p>
                Saiful Muluk is located in the Mansehra district of Khyber
                Pakhtunkhwa, about 9 kilometres (5.6 mi) north of Naran,[2][3]
                in the northern part of Kaghan Valley. Malika Parbat, the
                highest peak in the valley is near the lake.[4] The lake is
                accessible from the nearby town of Naran during the summer
                season but access during winter is limited, as heavy snowfall
                and landslides threaten to cutoff the lake from other regions
              </p>
              <br></br>

              <h3>Physical features</h3>
              <p>
                Saiful Muluk was formed by glacial moraines that blocked the
                water of the stream passing through the valley.[5] The Kaghan
                Valley was formed in the greater Pleistocene Period dating back
                almost 300,000 years when the area was covered with ice. Rising
                temperatures and receding glaciers left a large depression where
                glaciers once stood. Melting water collected into the lake.
              </p>
              <br></br>

              <h3>Ecology</h3>
              <p>
                {" "}
                The lake has rich eco-diversity and holds many species of
                blue-green algae. Large brown trout are found in the lake, up to
                about seven kilograms.[6] About 26 species of vascular plant
                exist in the area, with Asteraceae the most commonly found
                species. Other species commonly found in the region are:
                Ranunculaceae, Compositae, Cruciferae, Gramineae, Apiaceae,
                Leguminosae, Scrophulariaceae and Polygonaceae
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <div className={classes.rightcolumn}>
          <div className={classes.card}>
            <h2>About Me</h2>
            <div className={classes.fakeimg}>
              {/* <div className={classes.fakeimg} style="height:100px;"> */}
              Image
            </div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>
          <div className={classes.card}>
            <h3>Popular Post</h3>
            <div className={classes.fakeimg}>Image</div>
            <br></br>
            <div className={classes.fakeimg}>Image</div>
            <br></br>
            <div className={classes.fakeimg}>Image</div>
          </div>
          <div className={classes.card}>
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};
