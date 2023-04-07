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
      <div  className={classes.footer__inner}>
        <div className={classes.footer__addr}>
          <h3 className={classes.footer__logo}>Tourism Council</h3>

          <p>
            "The thing about tourism is that
            the reality of a place is quite
            different from the mythology of it"
          </p>

          <span>- Martin Parr</span>
        </div>

        <ul className={classes.footer__nav}>
          <li className={classes.nav__item}>
            <h3 className={classes.nav__title}>Social Media</h3>

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
            <h3 className={classes.nav__title}>Contact</h3>

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
            <h3 className={classes.nav__title}>Legal</h3>

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
      </div>

      <div className={classes.legal}>
        <p>&copy; 2019 Something. All rights reserved.</p>
      </div>
    </footer>
  );
}
