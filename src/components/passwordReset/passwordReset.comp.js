import React from 'react'
import {Button,Container,Row,Col,Form} from 'react-bootstrap'
import PropTypes from 'prop-types'

export const ResetPassword = ({handleOnChange , handleOnResetSubmit , formSwitcher , email}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1>Reset</h1>
                <hr/>
                <Form autocomplete="off" onSubmit={handleOnResetSubmit}>
                <Form.Group>
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control  type="email" name="email" placeholder="Enter Email Address"  onChange={handleOnChange} value={email} required>
                    </Form.Control>
                </Form.Group>
                <Button type="submit">Reset</Button>
                </Form>
                <hr/>
                </Col>
            </Row>
            
            <Row>
                <Col>
                <a href="#!" onClick={()=> {formSwitcher('login')}}>Login Now?</a>
                </Col>
            </Row>
        </Container>

    )
};
ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,


    email: PropTypes.string.isRequired,}