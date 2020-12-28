exports.createPages = async ({actions, graphql, reporter}) => {
  const resultado = await graphql(`
    query {
      allDatoCmsCohete {
        nodes {
          slug  
        }
      }
    }
  `)

  // console.log(resultado.data.allDatoCmsCohete.nodes)

  if(resultado.errors) {
    reporter.panic('Ho hubo resultados', resultado.errors)
  }

  //Si hay paginas creo los archivos
  const cohetes = resultado.data.allDatoCmsCohete.nodes

  cohetes.forEach(cohete => {
    actions.createPage({
      path: cohete.slug,
      component: require.resolve('./src/components/cohetes.js'),
      context: {
        slug: cohete.slug
      }
    })
  })

}