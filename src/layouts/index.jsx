import React from 'react';
import emergence from 'emergence.js';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';
import '../assets/scss/bootstrap-theme.scss';

import TopNavigation from '../components/TopNavigation';

// eslint-disable-line react/prefer-stateless-function
export default class Layout extends React.Component {
  componentDidMount() {
    emergence.init();
  }

  componentDidUpdate() {
    emergence.init();
  }
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
