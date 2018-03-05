import React from 'react';
import g from 'glamorous';
import { css } from 'glamor';
import Link from 'gatsby-link';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';
import '../assets/scss/bootstrap-theme.scss';

import TopNavigation from '../components/TopNavigation';

export default class Layout extends React.Component {
  render() {
    const { children, data: { site } } = this.props;
    return (
      <div>
        <TopNavigation title={site.siteMetadata.title} />
        <div className="container">{children()}</div>
      </div>
    );
  }
}

export const query = graphql`
  query siteInfo {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
