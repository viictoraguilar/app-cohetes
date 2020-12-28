import React from "react"
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import ImagenHome from '../components/imagenHome'
import ContenidoInicio from '../components/contenidoInicio'
import CohetePreview from '../components/cohetePreview'
// import Rockets from '../components/rockets'
import fetch from 'isomorphic-fetch';
import useCohetes from '../hooks/use-cohetes'
import {ApolloProvider ,ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const cliente = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.spacex.land/graphql/',
    fetch
  })
});

const ListadoCohetes = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {



  const cohetes = useCohetes()

  console.log(cohetes)

  return (
    <ApolloProvider cliente={cliente}>
    <Layout>
      <ImagenHome/>
  
      <ContenidoInicio />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestras últimas misiones
      </h2>

      <ListadoCohetes>
        {cohetes.map(cohete => (
          <CohetePreview
            key={cohete.id}
            cohete={cohete}
          />
        ))}
      </ListadoCohetes>

    </Layout>
    </ApolloProvider>
  )
}

export default IndexPage
