import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import RecordField from './RecordField';
import RecordAlert from './RecordAlert';

import { formFields, formValiation } from './formfields';

class RecordForm extends Component {
    renderFields (fields) {
        return _.map(fields, ({ label, name, type }) => {
            return (
                <Col key={name} md={5}>
                    <Field
                        component={RecordField}
                        type={type}
                        label={label}
                        name={name}
                    />
                </Col>
            )
        });
    };

    renderRow () {
        return _.map(formFields, ({ fields, row }) => {
            return (
                <Row className='justify-content-center' key={row}> 
                    { this.renderFields(fields) }
                </Row>
            );
        });
    };

    render() {
        const { handleSubmit, pristine, reset, submitting, submitSucceeded } = this.props;
        console.log(submitSucceeded)
        return (
            <Form onSubmit={ handleSubmit }>
                {this.renderRow()}
                <Row className='justify-content-center mt-3 mb-5'>
                    <Col md={3}>
                        <Button
                            block
                            type='submit'
                            variant='primary'
                            disabled={pristine||submitting}
                        >
                            Submit
                        </Button>
                    </Col>
                    <Col md={3}>
                        <Button
                            block
                            type='button'
                            variant='danger' 
                            disabled={pristine||submitting}
                            onClick={reset}
                        >
                            Reset
                        </Button>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col md={3}>
                        { submitSucceeded ? <RecordAlert /> : '' }
                    </Col>
                </Row>
            </Form>
        );
    };
};

const validate = values => {
    const errors = {};
    _.each(formValiation, ({name, validate})=> {
        if (validate === 'text') {
            if (!values[name]){
                errors[name] = 'Required!';
            };
        };
    });

    return errors;
};

export default reduxForm({
    form: 'recordForm',
    validate, 
    destroyOnUnmount: false
})(RecordForm)