import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

class RecordAlert extends Component {
    state = { visible: true }
    componentDidMount() {
        setTimeout(()=> {
            this.setState({ visible: false })
        }, 3000);
    }

    render () {
        return  this.state.visible ? <Alert variant='success'>Submitted!</Alert> : null;
    };
};

export default RecordAlert;