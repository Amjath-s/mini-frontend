import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
export function Header()
{
     return(
        <>
       <Container>
      <Navbar expand="xl" className=" xl variant -light bg-dark fixed-top">
        <Container>
          <Navbar.Brand href="#">DOCINTELLIGENCE</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
        
        
        
        </>
     );
}