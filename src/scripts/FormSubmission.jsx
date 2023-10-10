import React from 'react'
import {useQuery,gql} from '@apollo/client'

const FORM_DATA =gql`
query{formSubmissions {
  edges {
    node {
      title
      slug
      }   
    }
  }
}
`


function FormSubmission(){
  return (
<>
<p>FORM_DATA</p>
</>
  )}

export default FormSubmission