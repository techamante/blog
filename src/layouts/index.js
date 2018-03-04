import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import "../assets/scss/bootstrap-theme.scss";
import "animate.css/animate.css";
import "font-awesome/css/font-awesome.css";

import { rhythm } from "../utils/typography";
import TopNavigation from "../components/TopNavigation";

const linkStyle = css({ float: `right` });

export default ({ children, data }) => (
  <div>
    <TopNavigation title="techamante" />
    <div className="container">{children()}</div>
  </div>
);
