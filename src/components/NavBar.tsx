import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "../css/App.css";


function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="./">
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./InfragisticsGrid">Infragistics-Grid</Nav.Link>
            <Nav.Link href="./InfragisticsGrid2">Infragistics-Grid2</Nav.Link>
            <Nav.Link href="./RowGrouping">Infragistics-Grid-Grouping</Nav.Link>
            <Nav.Link href="./ColumnFiltering">Infragistics-Grid-ColumnFiltering</Nav.Link>
            <Nav.Link href="./SimpleColumnChooser">Infragistics-Grid-SimpleColumnChooser</Nav.Link>
            <Nav.Link href="./StatusBadgeGrid">Infragistics-StatusBadgeGrid</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
