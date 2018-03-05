import React from 'react';
import Link from 'gatsby-link';

export default props => {
  const { title } = props;
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <div className="container">
        <Link className="text-center" to="/" href="/">
          <h1>{title}</h1>
        </Link>
      </div>
    </nav>
  );
};
