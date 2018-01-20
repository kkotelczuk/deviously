import React from 'react'
import Link from 'gatsby-link'
import {Helmet} from "react-helmet";

import '../layouts/BlogPost/index.css';
import './blog-post.css';

const Template = ({data, location, pathContext}) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter
  const { next, prev } = pathContext

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

        <div dangerouslySetInnerHTML={{__html: html}} />

        <div>
          {prev &&
            <Link to={prev.frontmatter.path}>
             Prev: {prev.frontmatter.title}
            </Link>
          }
        </div>
        <div>
          {next &&
            <Link to={next.frontmatter.path}>
              Next: {next.frontmatter.title}
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        path
        tags
        excerpt
        category
      }
    }
  }
`

export default Template
