import classes from "./ProfileCard.module.css";

import osama from "../../assests/images/osama.jpg";
import {
  MdAccessTime,
  MdLocationOn,
  MdManageAccounts,
  MdSend,
} from "react-icons/md";

export const ProfileCardComponent = () => {
  return (
    <div className={classes.card}>
      <img src={osama} />
      <h3>Osama Ehsan</h3>
      <p>A Programmer, Photographer,in short, jack for all trades</p>

      <ul>
        <li>
          <span>
            <MdLocationOn /> From
          </span>{" "}
          Pakistan
        </li>
        <li>
          <span>
            {" "}
            <MdManageAccounts /> Member Since
          </span>{" "}
          16 Oct 2021
        </li>
        <li>
          <span>
            <MdAccessTime /> Average response
          </span>{" "}
          12 hours
        </li>
        <li>
          <span>
            <MdSend /> Last delivery
          </span>{" "}
          24 days
        </li>
      </ul>
    </div>
  );
};
