import React from 'react'
import {Button,Container,Row,Col,Form} from 'react-bootstrap'
import PropTypes from 'prop-types'

export const LoginForm = ({handleOnChange , handleOnSubmit, formSwitcher , email,password}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1>Login</h1>
                <hr/>
                <Form autocomplete="off" onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control  type="email" name="email" placeholder="Enter Email Address"  onChange={handleOnChange} value={email} required>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Password"  onChange={handleOnChange} value={password} required>
                    </Form.Control>
                </Form.Group> 
                <Button type="submit">Login</Button>
                </Form>
                <hr/>
                </Col>
            </Row>
            
            <Row>
                <Col>
                <a href="#!"onClick={() => formSwitcher('reset')} >Forgot Password?</a>
                </Col>
            </Row>
        </Container>

    )
};
LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}