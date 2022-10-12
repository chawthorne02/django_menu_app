import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import MenuList from './components/Menu/MenuList';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Contact from './components/Contact/Contact';



function App() { 
  

  const [menuitems, setMenuitems] = useState(null);
  const [page, setPage] = useState("a");

  useEffect(() => {
    const getMenuitem = async () => {
      console.log('here')
      const response = await fetch('/api_v1/Menuitem/');
      console.log(response)
      if(!response.ok) {
        throw new Error('Network response was not OK');
      } else {
        const data = await response.json();
        setMenuitems(data);
      }

    }

    getMenuitem();
  }, [])

  if (!menuitems) {
    return <div>Fetching data ...</div>;
  }

const html = menuitems.map(menuItem => (
  <li key={menuItem.id}>
    <h2>{menuItem.price}</h2>
  </li>
))


  
  
  let content;
  if (page === "a") {
    content = <WelcomePage />;
  } else if (page === "b") {
    content = <MenuList />;
  } else if (page === "c") {
    content = <Contact />;
  }
  
  
  return (
  <div className='Brunch-spot'>
    <Navbar>
    <Container fluid>
    {/* <img src={pancakes} alt='logo' /> */}
      <Navbar.Brand className="title">The Brunch Spot</Navbar.Brand>
        <Nav className="navigation">
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("a")}
            >
              Welcome
            </Button>{" "}
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("b")}
            >
              Menu 
            </Button>{" "}
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("c")}
            >
              Contact
            </Button>{" "}
        </Nav>     
      </Container>
    </Navbar>
    {content}
  </div>  
    



  );
}

export default App;
 