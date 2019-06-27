const os = require('os');

module.exports = (app, sequelize) => {
    const Record = sequelize.models.record;
    const Account = sequelize.models.account;

    app.post('/report/csv', async (req, res) => {
        const { dateSelected } = req.body;

        const record = await Record.findAll({ where: { createdAt: dateSelected }});
        const account = await Account.findAll();

        const output = [];

        // Build the header
        const header = ['TradeType', 'SecurityId', 'Strategy', 'Fund', 'Trader', 'Price', 'Amount', '', 'TradeCurrency', 'Counterparty', 'Clearer', 'TradeDate', 'SettleDate', 'OrderId', 'FillId', 'SecType', 'Sedol', 'Isin', 'Ticker', '', '', '', '', 'TransferAcccount'];
        output.push(header.join());

        // Build the rows
        record.forEach((d) => {
            let acct_from = account.find(obj => obj.acct_id === d.acct_from);
            let acct_to = account.find(obj => obj.acct_id === d.acct_to );

            const row = [];
            row.push(d.trade_type);
            row.push('');
            row.push('DefaultCashStrategy');
            row.push(d.fund);
            row.push('OPS');
            row.push(d.price);
            row.push(d.amount);
            row.push('');
            row.push(d.currency);
            row.push('Notional');
            row.push(acct_from.acct_code);
            row.push(d.trade_date);
            row.push(d.settle_date);
            row.push('');
            row.push('');
            row.push('');
            row.push('');
            row.push('');
            row.push(d.ticker);
            row.push('');
            row.push('');
            row.push('');
            row.push('');
            row.push(acct_to.acct_code);

            output.push(row.join());
        });

        // Config res for sending back csv
        res.setHeader('Content-disposition', 'attachment; filename=testing.csv');
        res.set('Content-Type', 'text/csv');
        res.status(200).send(output.join(os.EOL));
    });
};