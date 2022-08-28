import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import Seo from "../components/Seo/Seo"
export default function Home({ data }) {
  return (
    <Layout>
      {/* <SEO title="home" /> */}
      <Seo title="Home" />
      {/* <h1>My WordPress Blog</h1>
      <h4>Posts</h4> */}
      <h2 class="title-home"><span>Bài viết mới</span></h2>
      <div class="loop-item">
      {data.allWpPost.edges.map(({ node }) => (
        <div key={node.slug} class="list-news">
            <Link to={node.slug}>
            <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`