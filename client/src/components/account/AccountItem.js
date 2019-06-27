import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AccountForm from './AccountForm';

class AccountItem extends Component {
    state = {
        isEditing: false
    }

    switchEditMode = () => {
        this.setState({ isEditing: !this.state.isEditing });
    }

    renderContent () {
        const { acct_id, acct_code, fullname, acct_no } = this.props;

        if (this.state.isEditing) {
            return (
                <AccountForm 
                    method='PUT' 
                    acct_id={acct_id} 
                    acct_code={acct_code} 
                    fullname={fullname} 
                    acct_no={acct_no} 
                    switchEditMode={this.switchEditMode}
                    onSubmit={this.props.onSubmit}
                />
            );
        };

        return (
            <Card.Body>
                <Row>
                    <Col md={2}><b>Account Code:</b></Col>
                    <Col md={10}>{acct_code}</Col>
                </Row>
                <Row>
                    <Col md={2}><b>Account Name:</b></Col>
                    <Col md={10}>{fullname}</Col>
                </Row>
                <Row>
                    <Col md={2}><b>Account No:</b></Col>
                    <Col md={10}>{acct_no}</Col>
                </Row>
                <Card.Link
                    as={Button}
                    onClick={this.switchEditMode}
                >
                    Edit
                </Card.Link>
            </Card.Body>
        );
    };

    render () {
        return (
            <Card className='mt-2'>
                {this.renderContent()}
            </Card>
        )
    }
};

export default AccountItem;