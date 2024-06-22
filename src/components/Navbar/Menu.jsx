import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiMovie2Fill } from "react-icons/ri";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { BsSearch } from "react-icons/bs";

const Menu = () => {

  const [search,setSearch] = useState('');
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_API_KEY
  const API_SEARCH = import.meta.env.VITE_API_SEARCH

  const handleSearch = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    };

    fetch(`${API_SEARCH}?query=${search}`,options)
    .then(response => response.json())
    .then(response => {
      console.log(response.results)
      navigate('/search', { state: { results: response.results } });
    })
    .catch(err => console.error(err));
  }

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><Link to='/'>Pelimovies <RiMovie2Fill /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Peliculas" id="basic-nav-dropdown">
                <NavDropdown.Item>Populares</NavDropdown.Item>
                <NavDropdown.Item>Mejor puntuadas</NavDropdown.Item>
                <NavDropdown.Item>En cartelera</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Próximamente</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Series" id="basic-nav-dropdown">
                <NavDropdown.Item>Populares</NavDropdown.Item>
                <NavDropdown.Item>Mejor puntuadas</NavDropdown.Item>
                <NavDropdown.Item>Taquilleras</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as="div"><Link to='tv' className="dropdown-item">Próximamente</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div>
                <InputGroup size="sm" className="">
                <InputGroup.Text id="inputGroup-sizing-sm"><BsSearch /></InputGroup.Text>
                <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e)=>{setSearch(e.target.value)}}
                />
                <Button onClick={handleSearch} size="sm">Search</Button>
                </InputGroup>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Menu