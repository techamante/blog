import React from 'react';
import Link from 'gatsby-link';

class TopNavigation extends React.Component {
  render() {
    const { location, title } = this.props;
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <div className="container">
          <Link className="text-center" to="/">
            <h1>{title}</h1>
          </Link>
        </div>
      </nav>
    );
  }
}

export default TopNavigation;
