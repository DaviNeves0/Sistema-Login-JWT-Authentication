import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";

// Importando a api
import api from "../service/api";

import {Button, Container, Row, Col, Form, FormGroup, Jumbotron} from 'react-bootstrap';
import { Alert } from 'reactstrap';

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('') 
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault()

        const data = {
            email,
            password,
        };
        try{
        const response = await api.post('authenticate', data );
            localStorage.setItem('tokenAuth',response.data.token);
            localStorage.setItem('userName',response.data.user.name);
            history.push('/authenticate');
        }catch(err){
            alert('Senha inválida')
        }
    }

    return(
        <Container>
            <Jumbotron>
            <Row>
                <Col>
                   <Form onSubmit={handleLogin}>
                        <FormGroup>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="emai" placeholder="Enter Email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Set Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                        </FormGroup>
                        <Button variant="primary" type="submit">
                             Entrar
                        </Button>
                   </Form>
                   <p>Esqueceu seu senha? <Link to="/reset">Mudar senha.</Link></p>
                   <br />
                   <p>Não tem uma conta? <Link to="/">Crie uma !</Link></p>
                </Col>
            </Row>
            </Jumbotron>
        </Container>
    )
}

export default Login;