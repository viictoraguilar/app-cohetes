
import {graphql, useStaticQuery} from 'gatsby'

const useCohetes = () => {

  const data = useStaticQuery(graphql`
    query {
      allDatoCmsCohete {
        nodes {
          titulo
          id
          contenido
          slug
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  return data.allDatoCmsCohete.nodes.map(cohete => ({
    titulo: cohete.titulo,
    id: cohete.id,
    contenido: cohete.contenido,
    imagen: cohete.imagen,
    slug: cohete.slug
  }))

}
 
export default useCohetes;