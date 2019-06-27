import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAccount } from '../../actions';

import Container from 'react-bootstrap/Container';

import AccountForm from './AccountForm';
import AccountList from './AccountList';

class AccountPage extends Component {
    componentDidMount () {
        this.props.fetchAccount();
    };

    onSubmit = () => {
        this.props.fetchAccount();
    };

    render () {
        return (
            <Container>
                <AccountForm onSubmit={this.onSubmit} />
                <AccountList account={this.props.account} onSubmit={this.onSubmit} />
            </Container>
        );
    };
};

const mapStateToProps = ({account}) => {
    return { account };
};

export default connect (mapStateToProps, { fetchAccount })(AccountPage);