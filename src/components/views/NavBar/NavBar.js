import { Nav, Navbar, Container, NavLink } from "react-bootstrap";
import styles from "./NavBar.module.scss"


const NavBar = () => {

    return (

            <Navbar expand="lg" className={styles.navBarClass + " bg-body-tertiary"}>

                <Container className={styles.navBarInnerContainer}>

                    <Navbar.Brand className={styles.brandClass} href="/">blog.app</Navbar.Brand>

                    <Navbar.Toggle className={styles.toggleClass} aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse className={styles.collapseClass} id="basic-navbar-nav">

                        <Nav className="me-auto">

                            <Nav.Link as={NavLink} href="/">home</Nav.Link>
                            <Nav.Link as={NavLink} href="/about">about</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>

                </Container>

            </Navbar>
        
      );
}

export default NavBar;