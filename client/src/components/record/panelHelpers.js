import React from 'react';
import PanelItem from './PanelItem';

export const defaultPanel = () => {
    return (
        <div>
            <PanelItem 
                bg = 'info'
                type = 'Debit'
                ledger='-'
            />
            <PanelItem 
                bg='danger'
                type = 'Credit'
                ledger='-'
            />
        </div>
    )
}

export const transferPanel = (form, acct_from, acct_to) => {
    const { price, currency } = form;
    const { acct_code: acctFromCode, fullname: acctFromName, acct_no: acctFromNo } = acct_from;
    const { acct_code: acctToCode, fullname: acctToName, acct_no: acctToNo } = acct_to;

    return (
        <div>
            <PanelItem 
                bg = 'info'
                currency={currency}
                fullname={acctToName}
                acct_no={acctToNo}
                acct_code={acctToCode}
                price={price}
                type = 'Debit'
            />
            <PanelItem 
                bg='danger'
                currency={currency}
                fullname={acctFromName}
                acct_no={acctFromNo}
                acct_code={acctFromCode}
                price={price}
                type = 'Credit'
            />
        </div>
    );
};

export const investmentPanel = (form, acct) => {
    const { price, amount, currency, ticker, tx_fee } = form;
    const { acct_code, fullname, acct_no } = acct;

    return (
        <div>
            <PanelItem 
                bg = 'info'
                type = 'Debit'
                currency={currency}
                acct_code={ticker}
                price={price * amount}
                tx_fee={tx_fee}
            />
            <PanelItem 
                bg='danger'
                type = 'Credit'
                currency={currency}
                fullname={fullname}
                acct_no={acct_no}
                acct_code={acct_code}
                price={price * amount}
                tx_fee={tx_fee}
            />
        </div>
    );
};

export const expensePanel = (form, acct) => {
    const { price, currency } = form;
    const { acct_code, fullname, acct_no } = acct;

    return (
        <div>
            <PanelItem 
                bg = 'info'
                type = 'Debit'
                currency={currency}
                acct_code='Expense'
                price={price}
            />
            <PanelItem 
                bg='danger'
                type = 'Credit'
                currency={currency}
                fullname={fullname}
                acct_no={acct_no}
                acct_code={acct_code}
                price={price}
            />
        </div>
    );
};

export const revenuePanel = (form, acct) => {
    const { price, currency } = form;
    const { acct_code, fullname, acct_no } = acct;

    return (
        <div>
            <PanelItem 
                bg = 'info'
                type = 'Debit'
                currency={currency}
                fullname={fullname}
                acct_no={acct_no}
                acct_code={acct_code}
                price={price}
            />
            <PanelItem 
                bg='danger'
                type = 'Credit'
                currency={currency}

                acct_code='Revenue'
                price={price}
            />
        </div>
    );
};