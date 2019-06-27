import axios from 'axios';
import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import DatePicker from "react-datepicker";
import FileDownload from 'js-file-download';

import "react-datepicker/dist/react-datepicker.css";

class Report extends Component {
    state = { dateSelected: new Date() }

    handleChange = date => {
        this.setState({ dateSelected: date });
    };

    onSubmit = async () => {
        const res = await axios.post('/report/csv', { dateSelected: this.state.dateSelected});
        FileDownload(res.data, 'openlog.csv');
    };

    render() {
        return (
            <Container>
                <Card className='mt-2'>
                    <Card.Body>
                        <Card.Title className='text-center'>
                            Download CSV for
                        </Card.Title>
                        <Card.Title className='text-center'>
                            <DatePicker 
                                className='form-control'
                                selected={this.state.dateSelected}
                                onChange={this.handleChange}
                            />
                        </Card.Title>
                        <Card.Title className='text-center'>
                            <Button 
                                type='button'
                                onClick={this.onSubmit}
                            >
                                Download
                            </Button>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Container>
        );
    };
};

export default Report;