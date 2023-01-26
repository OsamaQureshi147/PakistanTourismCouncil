import React from "react";
import { Link } from "react-router-dom";
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
              <Link to='/'>
                {" "}
                <BsFacebook />
                &nbsp;Facebook
              </Link>
            </li>

            <li>
              <Link to='/'>
                <BsTwitter />
                &nbsp;Twitter
              </Link>
            </li>

            <li>
              <Link to='/'>
                <BsInstagram />
                &nbsp;Instagram
              </Link>
            </li>
          </ul>
        </li>

        <li className={classes.nav__item}>
          <h2 className={classes.nav__title}>Contact</h2>

          <ul className={classes.nav__ul}>
            <li>
              <Link to='/'>
                <ImLocation2 />
                &nbsp;Islamabad, Pakistan
              </Link>
            </li>

            <li>
              <Link to='/'>
                <BsFillTelephoneFill />
                &nbsp;+92 051 1234567
              </Link>
            </li>

            <li>
              <Link to='/'>
                <MdMarkEmailUnread />
                &nbsp;Test@gmail.com
              </Link>
            </li>
          </ul>
        </li>

        <li className={classes.nav__item}>
          <h2 className={classes.nav__title}>Legal</h2>

          <ul className={classes.nav__ul}>
            <li>
              <Link to='/'>Privacy Policy</Link>
            </li>

            <li>
              <Link to='/'>Terms of Use</Link>
            </li>

            <li>
              <Link to='/'>Sitemap</Link>
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
