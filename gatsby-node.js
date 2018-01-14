const path = require('path')

const createTagPages = (createPage, posts) => {
  const tagsPageTemplate = path.resolve(`src/templates/tags.js`)
  const allTagsPageTemplate = path.resolve(`src/templates/all-tags.js`)

  const postsByTags = {}

  posts.forEach(({node}) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTags[tag]) {
          postsByTags[tag] = []
        }

        postsByTags[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTags)

  createPage({
    path: '/tags',
    component: allTagsPageTemplate,
    context: {
      tags: tags.sort()
    }
  })

  tags.forEach(tagName => {
    const posts = postsByTags[tagName]

    createPage({
      path: `/tags/${tagName}`,
      component: tagsPageTemplate,
      context: {
        posts,
        tagName
      }
    })
  })
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const blogpostTemplate = path.resolve(`src/templates/blog-post.js`)

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          id
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
    }
  }`)
  .then( result => {
    if (result.errors) {
      return Promise.reject()
    }

    const posts = result.data.allMarkdownRemark.edges

    createTagPages(createPage, posts)

    posts.forEach(({ node }, index) => {
      createPage({
        path: node.frontmatter.path,
        component: blogpostTemplate,
        context: {
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === (posts.length - 1) ? null : posts[index + 1].node
        }
      })
    })
  })
}
