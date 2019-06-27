import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { fetchRecord, deleteRecord } from '../../actions';

class RecordList extends Component {
    componentDidMount () {
        this.props.fetchRecord();
    };

    renderRecords = (account, records, deleteRecord) => {
        return records.map(record => {
            const { createdAt, record_id, trade_type, fund, price, amount, currency, ticker, acct_from, acct_to, trade_date, settle_date, remark, tx_fee } = record;
            let acctFrom = account.find(obj => obj.acct_id === parseInt(acct_from)) || {};
            let acctTo = account.find(obj => obj.acct_id === parseInt(acct_to)) || {};
    
            return (
                <Card className='mt-2' key={record_id}>
                    <Card.Body>
                        <Row>
                            <Col md={2}>Created At:</Col>
                            <Col md={10}>{createdAt}</Col>
                        </Row>
                        <Row>
                            <Col md={2}>Trade Type:</Col>
                            <Col md={10}>{trade_type}</Col>
                        </Row>
                        <Row>
                            <Col md={2}>Fund:</Col>
                            <Col md={10}>{fund}</Col>
                        </Row>
                        <Row>
                            <Col md={2}>Price:</Col>
                            <Col md={10}>{price}</Col>
                        </Row>
                        <Row>
                            <Col md={2}>Amount:</Col>
                            <Col md={10}>{amount}</Col>
                        </Row>
                        <Row>
                            <Col md={2}>Currency:</Col>
                            <Col md={10}>{currency}</Col>
                        </Row>
                        <Row>
                            <Col md={2}>Ticker:</Col>
                            <Col md={10}>{ticker}</Col>
                        </Row>
                        <Row>
                            <Col md={2}>Account From:</Col>
                            <Col md={10}>{acctFrom.acct_code}</Col>
                        </Row>
                        <Row>
                            <Col md={2}>Account To:</Col>
                            <Col md={10}>{acctTo.acct_code}</Col>
                        </Row>
                        <Row>
                            <Col md={2}>Trade Date:</Col>
                            <Col md={10}>{trade_date}</Col>
                        </Row>
                        <Row>
                            <Col md={2}>Settlement Date:</Col>
                            <Col md={10}>{settle_date}</Col>
                        </Row>
                        <Row>
                            <Col md={2}>Remark:</Col>
                            <Col md={10}>{remark}</Col>
                        </Row>
                        <Row>
                            <Col md={2}>Transaction Fee:</Col>
                            <Col md={10}>{tx_fee}</Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col md={3}>
                                <Button
                                block
                                variant='danger'
                                id={record_id}
                                onClick={e=>deleteRecord(e.target.id)}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            );
        });
    };

    render () {
        const { account, record, deleteRecord } = this.props;
        return <div>{this.renderRecords(account, record, deleteRecord)}</div>;
    }
};


const mapStateToProps = ({ account, record }) => {
    return { account, record }
};

export default connect(mapStateToProps, { fetchRecord, deleteRecord })(RecordList);