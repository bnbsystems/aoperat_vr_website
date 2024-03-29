import { graphql, Link, StaticQuery } from "gatsby"
import React from 'react'
import PostCard from "./post-card"

export const blogListQuery = graphql`
  query BlogListHomeQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`

const BlogListHome = () => {
  return <StaticQuery 
    query={blogListQuery}
    render={(data) => {
      const { edges: posts } = data.allMarkdownRemark
      const formattedPosts = posts
      .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
      console.log(formattedPosts)
    return(<PostMaker data={formattedPosts} />)
  }}
  />
}

const PostMaker = ({ data }) => (
  <div>
    <section className="home-posts">
      <div className="grids sm-2 lg-3">{data}</div>
      <div className="buttons is-centered ">
        <Link className="button mrb-button mrb-button-light" to="/blog">
           Czytaj więcej
        </Link>
      </div>
    </section>
  </div>
)

export default BlogListHome