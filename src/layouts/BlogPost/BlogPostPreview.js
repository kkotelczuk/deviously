import React from 'react';
import Link from 'gatsby-link'
import { FaShareSquareO } from 'react-icons/lib/fa';

import './index.css'

const BlogPostPreview = (props) => {
  const { id, frontmatter } = props

  return  (
    <div key={id} className="blogPost-preview">
      <div className="blogPost-meta">
        <div style={{display: 'flex'}}>
          <div>{frontmatter.date}</div>
          <div className="blogPost-meta-category">
            {frontmatter.category}
          </div>
        </div>
      </div>
      <Link to={frontmatter.path} className="blogPost-title">
        {frontmatter.title}
      </Link>
      <div className="blogPost-excerpt">
        {frontmatter.excerpt}
      </div>
 {/*     <FaShareSquareO
        color="#BDBDBD"
        size={16}
        className="blogPost-shareIcon"
      />*/}
    </div>
  )
}

export default BlogPostPreview
