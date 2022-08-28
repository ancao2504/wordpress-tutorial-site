/*
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
*/

const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

// post
const postsQuery = ` {
  allWpPost(sort: { fields: [date] }) {
    edges {
      node {
        title
        excerpt
        content
        slug
      }
    }
  }
}
`
// page
const pageQuery = ` {
  allWpPage {
    edges {
      node {
        title
        slug
        status
        content
      }
    }
  }
}
`

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {

    // Pages
    graphql(pageQuery)
        .then(result => {
            if (result.errors) {
                console.log(result.errors);
                reject(result.errors);
            }

            const pageTemplate = path.resolve("./src/templates/page.js");

            _.each(result.data.allWpPage.edges, edge => {
                createPage({
                    path: `/${edge.node.slug}/`,
                    component: slash(pageTemplate),
                    context: {
                      slug: edge.node.slug,
                    },
                });
            });
        })

        .then(() => {
            graphql(postsQuery)
                .then(result => {
                    if (result.errors) {
                        console.log(result.errors);
                        reject(result.errors);
                    }
                    const postTemplate = path.resolve("./src/templates/post.js");

                    _.each(result.data.allWpPost.edges, edge => {
                        createPage({
                            path: `${edge.node.slug}`,
                            component: slash(postTemplate),
                            context: {
                              slug: edge.node.slug,
                            },
                        });
                    });
                    resolve();
                });
        });
    // ==== END POSTS ====
});










  // return graphql(postsQuery)
  //   .then(result => {
  //     result.data.allWpPost.edges.forEach(({ node }) => {
  //       createPage({
  //         path: node.slug,
  //         component: path.resolve(`./src/templates/post.js`),
  //         context: {
  //           slug: node.slug,
  //         },
  //       })
  //     })
  //   })

}