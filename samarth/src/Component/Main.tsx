import * as React from 'react'
import { FormContainer } from './Form';

import {
    Container,
    Navbar,
    NavbarBrand,
  } from 'reactstrap';

 
export const Main:any = (props:any) => {
  
 
    return (
    <div>
      <Navbar color="faded"  expand="md">
        <NavbarBrand href="/" className="m-auto"><h1>Samartha Hospital</h1></NavbarBrand>
      </Navbar>
      <Container className="main-form">
         <FormContainer></FormContainer>
      </Container>
    </div>
    )

}