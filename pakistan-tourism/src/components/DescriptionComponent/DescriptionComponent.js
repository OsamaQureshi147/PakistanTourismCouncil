import React from "react";

import classes from "./Description.module.css";
import lake_saifulmalook from "../../assests/images/saif-ul-malook.png";
import { ListItem } from "./ListItem";
export const DescriptionComponent = (props) => {
  return (
    <div>
      <div className={classes.row}>
        <div className={classes.leftcolumn}>
          <div className={classes.card}>
            <br></br>
            {/* <h5>Title description, Dec 7, 2017</h5> */}
            {/* <div className={classes.fakeimg} > */}
            <img src={lake_saifulmalook} alt='images4' />
            <p className={classes.credit}>
              (Image Credit :
              <a href='https://www.google.com' target='_blank'>
                Danish)
              </a>
            </p>

            <br />
            <br />
            <h2>{props.title}</h2>

            {/* <div className={classes.fakeimg}  style="height:200px;"> */}

            {/* </div> */}
            <br />
            <br />
            <div className={classes.paragragh}>
              {props.data.map((e) => {
                return (
                  <ListItem heading={e.heading} description={e.description} />
                );
              })}
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
