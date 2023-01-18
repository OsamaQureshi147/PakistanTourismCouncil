import classes from "./Reviews.module.css";
import pic1 from "../../assests/images/c1.png";

export const MembersReviewCard = () => {
  return (
    <div className={classes.coment}>
      <img src={pic1} alt='images4' />
      <h4>Osama Ahsan</h4>
      <p>Managing Northen tours in pakistan</p>
    </div>
  );
};
