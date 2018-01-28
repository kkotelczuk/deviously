'use strict';

import React, { Component } from 'react';
import Link from 'gatsby-link'

import BlogPostPreview from '../layouts/BlogPost/BlogPostPreview.js';

class IdexPage extends Component {
  render() {
    const {edges: posts} = this.props.data.allMarkdownRemark

    return (
    <div>
      {posts.map(({node: post}) => {
        const { frontmatter } = post
        return (
          <BlogPostPreview
            id={post.id}
            frontmatter={frontmatter}
          />
        )
      })}
    </div>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }) {
      totalCount
      edges {
        node {
          id
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
    }
  }
`

export default IdexPage;
