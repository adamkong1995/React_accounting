module.exports = (app, sequelize) => {
    const Record = sequelize.models.record;
    const tradeTypeList = require('../utils/tradeType');

    app.post('/api/record', async (req, res) => {
        const { trade_type, fund, price, amount, currency, ticker, acct_from, acct_to, trade_date, settle_date, remark, tx_fee } = req.body;
        let { value } = tradeTypeList.find(obj => obj.id === trade_type) || {};
        let record = {};
        switch (value) {
            case 'TransAcct':
            case 'SettleCA':
            case 'BankChg':
            case 'IntIncome':
            case 'DivIncome':
            case 'OpenLong':
            case 'OpenShort':
                record = await Record.create({ trade_type: value, fund, price: 1, amount: price, currency, ticker: currency, acct_from, acct_to, trade_date, settle_date, remark, tx_fee });
            
                return res.json(record);
            case 'Buy':
            case 'Sell':
                record = await Record.create({ trade_type: value, fund, price, amount, currency, ticker, acct_from, acct_to, trade_date, settle_date, remark, tx_fee });
            
                return res.json(record);
            default:
                return;
        }
    });

    app.put('/api/record', async (req, res) => {
        const { record_id, trade_type, fund, price, amount, currency, ticker, acct_from, acct_to, trade_date, settle_date, remark, tx_fee} = req.body;
        const record = await Record.findByPk(record_id);
        await record.update({ record_id, trade_type, fund, price, amount, currency, ticker, acct_from, acct_to, trade_date, settle_date, remark, tx_fee});
        const result = await record.save();
        res.json(result);
    });

    app.get('/api/record', async (req, res) => {
        const { createdAt } = req.body;

        if (createdAt) {
            const record = await Record.findAll({
                where: {createdAt: createdAt },
                attributes: ['createdAt', 'record_id', 'trade_type', 'fund', 'price', 'amount', 'currency', 'ticker', 'acct_from', 'acct_to', 'trade_date', 'settle_date', 'remark', 'tx_fee'],
                order: [['createdAt', 'ASC'], ['record_id', 'ASC']]
            });
            return res.json(record);
        };

        const record = await Record.findAll({
           attributes: ['createdAt', 'record_id', 'trade_type', 'fund', 'price', 'amount', 'currency', 'ticker', 'acct_from', 'acct_to', 'trade_date', 'settle_date', 'remark', 'tx_fee'],
           order: [['createdAt', 'DESC'], ['record_id', 'DESC']]
       });
       return res.json(record);
    });

    app.delete('/api/record', async(req, res) => {
        const { record_id } = req.body;
        const record = await Record.findByPk(record_id);
        const result = record.destroy();
        res.json(result);
    });
};