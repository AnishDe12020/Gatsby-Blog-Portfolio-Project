import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>Anish's Thoughts</h1>
    </div>
    <h4>{ data.allMarkdownRemark.totalCount }</h4>
    {
      data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <span>{ node.frontmatter.title } - { node.frontmatter.date }</span>
          <p>{ node.excerpt }</p>
        </div>
      ))
    }
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          excerpt
        }
      }
    }
  }
`