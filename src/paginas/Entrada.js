import React from 'react';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import { temaContexto } from '../Componentes/Tema';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';


function Entrada(){
    const tema = useContext(temaContexto);
    return (
        <Container data-bs-theme={tema}>
            <h1>Entrada</h1>
            
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Link 2
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">Tab pane content 1</Tab.Pane>
            <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
                
            
        </Container>
        
    );
}

export default Entrada;