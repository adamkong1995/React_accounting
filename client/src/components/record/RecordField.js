import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAccount } from '../../actions';

import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";

const renderDropdown = list => {
    return _.map(list, ({ fullname, acct_id, }) => {
        return (
            <option key={acct_id} value={acct_id}>{fullname}</option>
        );
    });
};

const renderField = (input, type, account) => {

    switch(type) {
        case 'text':
            return <Form.Control {...input} autoComplete='off' type='text' />
        case 'number':
            return <Form.Control {...input} autoComplete='off' type='number' />
        case 'date':
            return (
                <div>
                    <Form.Control
                        as={DatePicker} 
                        {...input}
                        autoComplete='off'
                        className='form-control' 
                        dateForm= 'YYYY/MM/DD'
                        onChange={date => input.onChange(moment(date).format('YYYY/MM/DD')) }
                        selected={null}
                        
                    />
                </div>
            );
        case 'account':
            return (
                <Form.Control as='select' {...input}>
                    <option hidden />
                    {renderDropdown(account)}
                </Form.Control>
            ) 
        case 'type':
            return (
                <Form.Control as='select' {...input}>
                    <option hidden />
                    <optgroup label='Transfer Account'>
                        <option value='1'>Transfer Account</option>
                        <option value='2'>Settlement CA</option>
                    </optgroup>
                    <optgroup label='Investment'>
                        <option value='3'>Buy</option>
                        <option value='4'>Sell</option>
                    </optgroup>
                    <optgroup label='Fx'>
                        <option value='5'>Buy</option>
                        <option value='6'>Sell</option>
                    </optgroup>
                    <optgroup label='Others'>
                        <option value='7'>Bank Charges</option>
                        <option value='8'>Interest Income</option>
                        <option value='9'>Dividend Income</option>
                        <option value='10'>Open Long</option>
                        <option value='11'>Open Short</option>
                    </optgroup>
                </Form.Control>
            );
        default:
            return;
    };
};

const RecordField = ({ account, input, type, label, meta: {error, touched}}) => {
    return (
        <div>
            <Form.Label>{label}</Form.Label>
            {renderField(input, type, account)}
            <div className='text-danger'>
                { touched && error && <span>{error}</span>}
            </div>
        </div>
    )
};

const mapStateToProps = ({ account }) => {
    return { account }
};

export default connect(mapStateToProps, { fetchAccount })(RecordField);