import React from 'react';
import {gql} from '@apollo/client'
import {Query} from "@apollo/client"


const Rockets = () => {
  return <Query query={gql`
    {
      rockets {
        description
        country
      }
    }  
  `}>
    {({loading,error,data}) => {
      if(loading) return <p>Loading...</p>
      if (error) return <p>Error!</p>

      return data.rockets.map(rocket => {
        return <p key={rocket.id} >{rocket.description}</p>
      })
    }}
  </Query>
}
 
export default Rockets;