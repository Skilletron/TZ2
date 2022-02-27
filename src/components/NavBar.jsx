import {Navbar,Nav,Container,Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom';
import React from "react";


const NavBar = () =>{
    let history = useHistory();
  return(
      <Navbar bg="primary" variant="dark">
          <Container>
                  <Nav className="d-flex">
                      <Button className={'p-3'} onClick={() => history.push('/Exercise_1')}><span className={'h5'}>Exercise 1</span></Button>
                      <Button className={'p-3'} onClick={() => history.push('/Exercise_2')}><span className={'h5'}>Exercise 2</span></Button>
                  </Nav>
          </Container>
      </Navbar>

  );

}

export default NavBar