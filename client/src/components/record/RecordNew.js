// RecordNew handle the form submit actions and the layout of the pages

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import RecordForm from './RecordForm';
import Panel from './Panel';

import './RecordNew.css';


const RecordNew = ({ submitRecord }) => {
    return (
        <Container fluid>
            <Row>
                <Col md={9}>
                    <RecordForm onSubmit={submitRecord} /> 
                </Col>
                <Col md={3} className='panel'>
                    <Panel />
                </Col>
            </Row>
        </Container>
    );
};

export default connect(null, actions)(RecordNew);