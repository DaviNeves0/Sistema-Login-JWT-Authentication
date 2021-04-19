import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";

// Importando a api
import api from "../service/api";

import {Button, Container, Row, Col, Form, FormGroup, Jumbotron} from 'react-bootstrap';

function SetPassword(){
    
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const [password, setPassword] = useState('')
    
    const history = useHistory();

    async function handleChange(e){
        e.preventDefault()

        const data = {
            email,
            token,
            password
        };
        try{
        const response = await api.post('reset_password',data );
            alert('Password alterado com sucesso')
            history.push('/login');
        }catch(err){
            alert('Erro')
        }
    }

    return(
        <Container>
            <Jumbotron>
            <Row>
                <Col>
                   <Form onSubmit={handleChange}>
                        <FormGroup>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="emai" placeholder="Enter Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                        </FormGroup> 
                        <FormGroup>
                            <Form.Label>Token</Form.Label>
                            <Form.Control type="emai" placeholder="Enter Token"
                            value={token}
                            onChange={e => setToken(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Nova Senha</Form.Label>
                            <Form.Control type="password" placeholder="New Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                        </FormGroup>
                        <Button variant="primary" type="submit">
                             Alterar Senha
                        </Button>
                   </Form> 
                   <p>Verifique seu Email !</p>
                </Col>
            </Row>
            </Jumbotron>
        </Container>
    )
}

export default SetPassword;