import React from 'react';
import AccountItem from './AccountItem';

const AccountList = props => {
    return (
        <div>{renderAccount(props.account, props.onSubmit)}</div>
    )
};

const renderAccount = (account, onSubmit) => {
    return account.map(({ acct_id, acct_code, fullname, acct_no }) => {
        return (
            <AccountItem 
                acct_id = {acct_id}
                acct_code = {acct_code}
                fullname = {fullname}
                acct_no = {acct_no}
                key = {acct_id}
                onSubmit={onSubmit}
            />
        )
    });
};

export default AccountList;