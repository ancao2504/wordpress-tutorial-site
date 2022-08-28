import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Post({ data }) {
  const post = data.allWpPost.edges[0].node
  return (
    <Layout>
      <div class="single-post">
        <h1 class="h1-class">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`