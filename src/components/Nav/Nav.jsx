import React from "react";
import classes from "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul className={classes.globalNav}>
        <li>
          <a href="#">
            <stroing>ナビ1</stroing>
            <span>なび1</span>
          </a>
        </li>
        <li>
          <a href="#">
            <stroing>ナビ2</stroing>
            <span>なび2</span>
          </a>
        </li>
        <li>
          <a href="#">
            <stroing>ナビ3</stroing>
            <span>なび3</span>
          </a>
        </li>
        <li>
          <a href="#">
            <stroing>ナビ4</stroing>
            <span>なび4</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
