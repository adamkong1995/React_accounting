export const formValiation = [
    {
        name: 'trade_type',
        validate: 'text'
    }, {
        name: 'fund',
        validate: 'text'
    }, {
        name: 'price',
        validate: 'text'
    }, {
        name: 'amount',
        validate: 'text'
    }, {
        name: 'currency',
        validate: 'text'
    }, {
        name: 'ticker',
        validate: 'text'
    }, {
        name: 'acct_from',
        validate: 'text'
    }, {
        name: 'acct_to',
        validate: 'text'
    }, {
        name: 'trade_date',
        validate: 'text'
    }, {
        name: 'settle_date',
        validate: 'text'
    }, {
        name: 'remark', 
        validate: null
    }, {
        name: 'tx_fee',
        validate: null
    }
]

export const formFields = [
    {
        row: 1,
        fields: [
            { 
                label: 'Type', 
                name: 'trade_type', 
                type: 'type'
            },{
                label: 'Fund', 
                name: 'fund', 
                type: 'text' 
            }
        ]
    },{
        row: 2,
        fields: [
            { 
                label: 'Price', 
                name: 'price', 
                type: 'number' 
            }, {
                label: 'Amount', 
                name: 'amount', 
                type: 'number' 
            }
        ]
    },{
        row: 3,
        fields: [
            {
                label: 'Currency', 
                name: 'currency', 
                type: 'text' 
            }, {
                label: 'Ticker', 
                name: 'ticker', 
                type: 'text' 
            }
        ]
    },{
        row: 4,
        fields: [
                {
                label: 'Account (From)', 
                name: 'acct_from', 
                type: 'account'
            }, {
                label: 'Account (To)', 
                name: 'acct_to', 
                type: 'account' 
            }
        ]
    },{
        row: 5,
        fields: [
            {
                label: 'Trade Date', 
                name: 'trade_date', 
                type: 'date' 
            }, {
                label: 'Settlement Date', 
                name: 'settle_date', 
                type: 'date' 
            }
        ]
    },{
        row: 6,
        fields: [
                {
                label: 'Remark (Optional)', 
                name: 'remark', 
                type: 'text' 
            }, {
                label: 'Transaction Fee (Optional)', 
                name: 'tx_fee', 
                type: 'number'
            }
        ]
    }
]