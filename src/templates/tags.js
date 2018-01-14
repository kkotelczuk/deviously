import React from 'react'
import Link from 'gatsby-link'

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext

  if (posts) {
    return (
      <div>
        <p>
          Posts about: {tagName}:
        </p>
        <ul>
          {posts.map(post => {
            return (
              <li>
                <Link to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {tags.map( tag => {
          return (
            <li>
              <Link to={`/tags/${tag}`}>
                {tag}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Tags
