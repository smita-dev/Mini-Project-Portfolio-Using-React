// import ReactBootstrap from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar=()=>{
    return(
    <>
            <Navbar top="fixed" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Smita Patil</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home">Project</Nav.Link>
                <Nav.Link href="#link">Experience</Nav.Link>
                <Nav.Link href="#home">Skills</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
      </>)
}

export default NavBar;