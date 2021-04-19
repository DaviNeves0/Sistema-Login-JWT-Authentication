import React from 'react';
import { useHistory } from "react-router-dom";


import {Button, Container, Row, Col, Form, FormGroup, Jumbotron} from 'react-bootstrap';



function Authenticate(){


    function handleSair(){
        alert('saiu')
        localStorage.clear();
        history.push('/login')
    
    }
    
    const userName = localStorage.getItem('userName')
    const history = useHistory();

    return(
        <Container>
            <Jumbotron>
            <Row>
                <Col>
                    <h1>Bem vindo'a', {userName}</h1>
                    <p>
                        Este é um ambiente desenvolvido para teste.
                    </p>
                    <p>
                    <Button variant="primary" onClick={handleSair}>Sair</Button>
                    </p>
                </Col>
            </Row>
            </Jumbotron>
        </Container>
    )
}

export default Authenticate;