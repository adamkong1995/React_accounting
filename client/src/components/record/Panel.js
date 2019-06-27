import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccount } from '../../actions';

import { defaultPanel, transferPanel, investmentPanel, expensePanel, revenuePanel } from './panelHelpers';

class Panel extends Component {
    renderContent () {
        const { account, hasValue, form } = this.props;
        
        if (!hasValue) {
            return defaultPanel();
        };

        let acct_from_info = account.find(obj => obj.acct_id === parseInt(form.acct_from)) || {};
        let acct_to_info = account.find(obj => obj.acct_id === parseInt(form.acct_to)) || {};

        switch(form.trade_type) {
            case "1":
            case "2":
                // transfer
                return transferPanel(form, acct_from_info, acct_to_info);
            case "3":
            case "4":
                // investment
                return investmentPanel(form, acct_from_info);
            case "5":
            case "6":
                // fx (Same logic with investment)
                return investmentPanel(form, acct_from_info);
            case "7":
                // expense
                return expensePanel(form, acct_from_info);
            case "8":
            case "9":
            case "10":
                return revenuePanel(form, acct_from_info);
            case "11":
                // expense
                return expensePanel(form, acct_from_info);
            default:
                return'Error'
        };
    };

    render() {
        return (
            <div>
                { this.renderContent() }
            </div>
        );
    };
};



const mapStateToProps = ({ account, form }) => {
    if (form.recordForm.hasOwnProperty('values')){
        return { account, form: form.recordForm.values, hasValue: true }
    }
    return { account, form: form.recordForm, hasValue: false }
};

export default connect(mapStateToProps, { fetchAccount })(Panel);