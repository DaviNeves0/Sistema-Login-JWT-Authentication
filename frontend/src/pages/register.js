
import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
// Importando a api
import api from "../service/api";
import { Alert } from 'reactstrap';
import {Button, Container, Row, Col, Form, FormGroup, Jumbotron} from 'react-bootstrap';


function Register(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('') 
    
    let history = useHistory()

    async function handleCadastrar(e){
        e.preventDefault()

        const data = {
            name,
            email,
            password,
        };
        
        try{
        const response = await api.post('register', data);
            <Alert color="success">
            Usuario cadastrado com sucesso !
            </Alert>
            history.push('/login');
        }catch(err){
            <Alert color="danger">
                Erro ao cadastrar o usuario !
            </Alert>
        }
    }

    return(
        <Container>
            <Jumbotron>
            <Row>
                <Col>
                   <Form onSubmit={handleCadastrar}>
                        <FormGroup>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                        </FormGroup>
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
                             Cadastrar
                        </Button>
                   </Form> 
                   <p>Já tem uma conta? <Link to="/login">Entre !</Link></p>
                </Col>
            </Row>
            </Jumbotron>
        </Container>
    )
}

export default Register;