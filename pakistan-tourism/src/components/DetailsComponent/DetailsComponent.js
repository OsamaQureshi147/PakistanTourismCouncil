import classes from "./Details.module.css";
import saifulmalook from "../../assests/images/saif-ul-malook.png";

export const DetailsComponent = (props) => {
  return (
    <div className={classes.main}>
      <h1>Saif Ul Malook</h1>
      <div className={classes.row}>
        <div className={classes.row1}>
          <img src={saifulmalook} className={classes.mainimg}></img>
        </div>
        <div className={classes.row2}>
          <h3>Short description</h3>
          <p>
            The Golden Temple, also known as Sri Harmandir Sahib ("abode of
            God") or Darbar Sahib, (Punjabi pronunciation: [dəɾbɑɾ sɑhɪb],
            "exalted holy court"), is a Gurdwara located in the city of
            Amritsar, Punjab, India.After Gurdwara Janam Asthan, the birthplace
            of Sikhism, this temple is the most important pilgrimage site of
            Sikhism. The temple is built around a man-made pool (sarovar) that
            was completed by Guru Ram Das in 1577.
          </p>
        </div>
      </div>
    </div>
  );
};
