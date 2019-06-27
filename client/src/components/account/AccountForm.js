import axios from 'axios';
import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class AccountForm extends Component {
    state = { 
        acct_id: null,
        acct_code: '', 
        fullname: '', 
        acct_no: '',
        method: 'POST'
    };

    componentDidMount () {
        this.setState({
            acct_id: this.props.acct_id || null,
            acct_code: this.props.acct_code ||  '', 
            fullname: this.props.fullname || '', 
            acct_no: this.props.acct_no || '',
            method: this.props.method || 'POST'
        })
    }

    deleteForm = async () => {
        await this.setState({ method: 'DELETE' });
        await this.submitForm();
    };

    submitForm = async () => {
        const { acct_id, acct_code, fullname, acct_no, method } = this.state;
        switch (method) {
            case 'POST':
                await axios.post('/api/account', { acct_code, fullname, acct_no });
                await this.setState({ acct_id: null, acct_code: '', fullname: '', acct_no: ''});
                break;
            case 'PUT':
                await axios.put('/api/account', { acct_id, acct_code, fullname, acct_no });
                await this.props.switchEditMode();
                break;
            case 'DELETE':
                await axios.delete('/api/account', {data: { acct_id }});
                break;
            default:
                return;
        };        
        await this.props.onSubmit();
    };

    renderButton () {
        if(this.state.method === 'POST') {
            return (
                <Row className='justify-content-center mt-4'>
                    <Col md={3}>
                        <Button
                            block
                            onClick={this.submitForm}
                            type='button'
                            variant='primary'
                        >
                            Submit
                        </Button>
                    </Col>
                </Row>
            );
        };

        return (
            <Row className='justify-content-center mt-4'>
                <Col md={3}>
                    <Button
                        block
                        onClick={this.submitForm}
                        type='button'
                        variant='primary'
                    >
                        Update
                    </Button>
                </Col>
                <Col md={3}>
                    <Button
                        block
                        onClick={this.props.switchEditMode}
                        type='button'
                        variant='secondary'
                    >
                        Cancel
                    </Button>
                </Col>
                <Col md={2}>
                    <Button
                        block
                        onClick={this.deleteForm}
                        type='button'
                        variant='danger'
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        );
    };

    render () {
        return (
            <Card className='mt-2'>
                <Card.Body>
                    <Row className='mt-2'>
                        <Form.Label column md='2'>Account Code</Form.Label>
                        <Col md={10}>
                            <Form.Control 
                                type='text'
                                value = {this.state.acct_code}
                                onChange={e=> this.setState({ acct_code: e.target.value})}
                            />
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Form.Label column md='2'>Account Name</Form.Label>
                        <Col md={10}>
                            <Form.Control 
                                type='text'
                                value = {this.state.fullname}
                                onChange={e=> this.setState({ fullname: e.target.value})}
                            />
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Form.Label column md='2'>Account No</Form.Label>
                        <Col md={10}>
                            <Form.Control 
                                type='text'
                                value = {this.state.acct_no}
                                onChange={e=> this.setState({ acct_no: e.target.value})}
                            />
                        </Col>
                    </Row>
                    {this.renderButton()}
                </Card.Body>
            </Card>
        );
    };
};


export default AccountForm;