import React from 'react';
import moment from 'moment';

export default ({
  author: { name, biography: { childMarkdownRemark: { html } } },
  postDate: date,
}) => (
  <div className="row post-top-meta">
    <div className="col-md-2">
      <a href="author.html">
        <img
          className="author-thumb"
          src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
          alt="Sal"
        />
      </a>
    </div>
    <div className="col-md-10">
      <a className="link-dark" href="author.html">
        {name}
      </a>
      <a href="#" className="btn follow">
        Follow
      </a>
      <span
        className="author-description"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <span className="post-date">{date}</span>
      <span className="dot" />
      <span className="post-read">6 min read</span>
    </div>
  </div>
);
