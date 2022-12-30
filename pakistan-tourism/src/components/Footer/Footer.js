import * as React from "react";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { MdMarkEmailUnread } from "react-icons/md";

import classes from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__addr}>
        <h1 className={classes.footer__logo}>Pakistan Tourism Council</h1>

        <h2>
          "The thing about tourism is that <br />
          the reality of a place is quite
          <br />
          different from the mythology of it"
        </h2>

        <h2>- Martin Parr</h2>
      </div>

      <ul className={classes.footer__nav}>
        <li className={classes.nav__item}>
          <h2 className={classes.nav__title}>Social Media</h2>

          <ul className={classes.nav__ul}>
            <li>
              <a href="#">
                {" "}
                <BsFacebook />
                &nbsp;Facebook
              </a>
            </li>

            <li>
              <a href="#">
                <BsTwitter />
                &nbsp;Twitter
              </a>
            </li>

            <li>
              <a href="#">
                <BsInstagram />
                &nbsp;Instagram
              </a>
            </li>
          </ul>
        </li>

        <li className={classes.nav__item}>
          <h2 className={classes.nav__title}>Contact</h2>

          <ul className={classes.nav__ul}>
            <li>
              <a href="#">
                <ImLocation2 />
                &nbsp;Islamabad, Pakistan
              </a>
            </li>

            <li>
              <a href="#">
                <BsFillTelephoneFill />
                &nbsp;+92 051 1234567
              </a>
            </li>

            <li>
              <a href="#">
                <MdMarkEmailUnread />
                &nbsp;Test@gmail.com
              </a>
            </li>
          </ul>
        </li>

        <li className={classes.nav__item}>
          <h2 className={classes.nav__title}>Legal</h2>

          <ul className={classes.nav__ul}>
            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms of Use</a>
            </li>

            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className={classes.legal}>
        <p>&copy; 2019 Something. All rights reserved.</p>
      </div>
    </footer>
  );
}
