import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

import RecordList from './RecordList';

class EditPage extends Component {
    render (){
        return (
            <Container>
                Previous Records
                <RecordList />
            </Container>
        );
    };
};

export default EditPage;