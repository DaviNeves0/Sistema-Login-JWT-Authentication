import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";

// Importando a api
import api from "../service/api";

import {Button, Container, Row, Col, Form, FormGroup, Jumbotron} from 'react-bootstrap';

function ResetPassword(){
    
    const [email, setEmail] = useState('')
    const history = useHistory();

    async function handleReset(e){
        e.preventDefault()

        const data = {
            email,
        };
        try{
        const response = await api.post('forgot_password', data );
            alert('Verefique o email')
            history.push('/chancePassword');
        }catch(err){
            alert('Erro')
        }
    }

    return(
        <Container>
            <Jumbotron>
            <Row>
                <Col>
                   <Form onSubmit={handleReset}>
                        <FormGroup>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="emai" placeholder="Enter Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <Button variant="primary" type="submit">
                             Enviar email
                        </Button>
                   </Form> 
                   <p>Digite seu email para receber uma nova senha !!</p>
                </Col>
            </Row>
            </Jumbotron>
        </Container>
    )
}

export default ResetPassword;