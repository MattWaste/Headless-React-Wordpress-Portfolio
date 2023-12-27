import React, { useState } from "react"
import { useMutation, gql } from "@apollo/client";

const CONTACT_MUTATION = gql`
    mutation CreateSubmissionMutation($clientMutationId: String!, $email: String!, $subject: String!, $message: String!, $send_copy: Boolean){
      createSubmission(input: {clientMutationId: $clientMutationId, email: $email, subject: $subject, message: $message, send_copy: $send_copy}) {
        data
        success
      }
    }`


 


const FormTest = () => {

    
  const [emailValue, setEmailValue] = useState('')
  const [subjectValue, setSubjectValue] = useState('')
  const [sendCopyValue, setSendCopyValue] = useState()
  const [messageValue, setMessageValue] = useState('')


   const [CreateSubmissionMutation, { data, loading, error }] = useMutation(CONTACT_MUTATION);
   
  if (loading) return 'Submitting...';

  if (error) return `Submission error! ${error.message}`;
  

return(
<>
<form

onSubmit={e => {

  e.preventDefault();
  CreateSubmissionMutation({ variables: {      
                 clientMutationId: 'example',
                  email: emailValue ,
                  subject: subjectValue ,
                  send_copy: sendCopyValue ,
                  message: messageValue }});


}}>
<label htmlFor='emailInput'>email</label>

<input id='emailInput' value={emailValue}
              onChange={e => {
                setEmailValue(e.target.value)
              }}
            />

<label htmlFor='subjectInput'>subject</label>

<input id='subjectInput' value={subjectValue}
              onChange={e => {
                setSubjectValue(e.target.value)
              }}
            />
<label htmlFor='sendCopyInput'>Send Copy?</label>

<input type = 'checkbox' id='sendCopyInput' value={sendCopyValue}
              onChange={e => {
                setSendCopyValue(!e.target.value)
              }}
            />
<label htmlFor='sendMessageInput'>message</label>

<textarea id='sendMessageInput' value={messageValue}
              onChange={e => {
                setMessageValue(e.target.value)
              }}
            />
<button type="submit">Submit Form</button>
</form>
</>
)
}
export default FormTest;



