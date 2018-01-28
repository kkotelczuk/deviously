import React, { Component } from 'react';
import Link from 'gatsby-link'
import { Helmet } from "react-helmet";
import { FaTag } from 'react-icons/lib/fa';

import '../layouts/BlogPost/index.css';
import './blog-post.css';

class Template extends Component {
  componentDidMount() {

    const disqus_config = function () {
      this.page.url = `https://deviously.pl/#!${frontmatter.path}`
      this.page.identifier = "deviouslypl"
    };

    const d = window.document;
    const s = d.createElement('script');
    s.src = '//deviouslypl.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    s.async = true;
    (d.head || d.body).appendChild(s);
  }
  render () {
    const { markdownRemark: post } = this.props.data
    const { frontmatter, html } = post
    const { title, date } = frontmatter
    const { next, prev } = this.props.pathContext

    return (
      <div className="blogPost-container">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className="blogPost-meta">
          <div style={{display: 'flex'}}>
            <div>{frontmatter.date}</div>
            <div className="blogPost-meta-category">
              {frontmatter.category}
            </div>
          </div>
        </div>
        <div>
          <h1>{title}</h1>

          <div className="blogPost-content" dangerouslySetInnerHTML={{__html: html}} />
          <div className="blogPost-tags">
            <FaTag color="#555" size="1.2rem" className="blogPost-tagsIcon"/>
            {frontmatter.tags.map( tag => {
              return (
                <Link className="blogPost-tag" to={`/tags/${tag}`}>
                  {tag}
                </Link>
              )
            })}
          </div>
        </div>
        <div id="disqus_thread"></div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        path
        tags
        excerpt
        category
      }
    }
  }
`

export default Template
