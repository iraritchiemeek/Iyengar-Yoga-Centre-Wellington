const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const retreatPage = path.resolve(`./src/templates/retreat.js`)
  const result = await graphql(
    `
      {
        allContentfulRetreat {
          edges {
            node {
            	title
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const retreats = result.data.allContentfulRetreat.edges

  retreats.forEach((retreat, index) => {
    createPage({
      path: '/retreats/' + retreat.node.title.replace(/\s/g, '-').toLowerCase(),
      component: retreatPage,
      context: {
        title: retreat.node.title
      },
    })
  })
}

