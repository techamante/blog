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

export default ({ children, data: { site } }) => {
  return (
    <div>
      <TopNavigation title={site.siteMetadata.title} />
      <div className="container">{children()}</div>
    </div>
  );
};

export const query = graphql`
  query siteInfo {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
