import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as action from '../actions';

import Header from './Header';
import SidebarMenu from './SidebarMenu';
import RecordNew from './record/RecordNew';
import EditPage from './editRecord/EditPage';
import Report from './report/Report';
import AccountPage from './account/AccountPage';

import './App.css';

class App extends Component {
    componentDidMount () {
        this.props.fetchAccount();
        this.props.fetchRecord();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div id='wrapper'>
                        <Header />
                        <SidebarMenu />
                        <div id='content'>
                            <Route exact path='/' component={RecordNew} />
                            <Route exact path='/edit_record' component={EditPage} />
                            <Route exact path='/report' component={Report} />
                            <Route exact path='/account' component={AccountPage} />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default connect(null, action)(App);