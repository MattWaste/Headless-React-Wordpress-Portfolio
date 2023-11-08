import React from 'react'
import {useQuery,gql} from '@apollo/client'

const GET_FORMDATA =gql`
 {formSubmissions {
  edges {
    node {
      title
      slug
      }   
    }
  }
}`;

function FormSubmission(){
  
const {loading,error,data} = useQuery(GET_FORMDATA);

if (loading) return <p>Loading...</p>;
console.log(loading);
  if (error) return <p>Error: {error.message}</p>;
   console.log(data);
 
  return (
    <div>
      {data.GET_FORMDATA.edges.map()}
    </div>
  )}

export default FormSubmission




