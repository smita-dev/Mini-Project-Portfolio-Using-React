// import ReactBootstrap from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeDisplay=()=>{
    return(
    <>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Smita Patil</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home">Project</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
      </>)
}

export default HomeDisplay;