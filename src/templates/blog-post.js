import React from 'react'
import Link from 'gatsby-link'
import {Helmet} from "react-helmet";
import { FaTag } from 'react-icons/lib/fa';

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
