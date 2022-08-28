import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
export default function Page({ data }) {
    const page = data.allWpPage.edges[0].node
    return (
      <Layout>
        <div>
          <h1 class="h1-class">{page.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
      </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`