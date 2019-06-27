module.exports = (app, sequelize) => {
    const Account = sequelize.models.account;

    app.post('/api/account', async (req, res) => {
        const { acct_code, fullname, acct_no } = req.body;
        const account = await Account.create({ acct_code, fullname, acct_no });
        res.json(account);
    });

    app.put('/api/account', async (req, res) => {
        const { acct_id, acct_code, fullname, acct_no } = req.body;
        const account = await Account.findByPk(acct_id);
        await account.update({ acct_code, fullname, acct_no });
        const result = await account.save();
        res.json(result);
    });

    app.get('/api/account', async (req, res) => {
        const { acct_id } = req.body;

        if (acct_id) {
            const account = await Account.findOne({
                where: {acct_id: acct_id},
                attributes: ['acct_id', 'acct_code', 'fullname', 'acct_no']
            });
            return res.json(account);
        }; 

        const account = await Account.findAll({
            attributes: ['acct_id', 'acct_code', 'fullname', 'acct_no'],
            order: [['fullname', 'ASC']]
        });
        return res.json(account);
    });

    app.delete('/api/account', async (req, res) => {
        const { acct_id } = req.body;
        const account = await Account.findByPk(acct_id);
        const result = account.destroy();
        res.json(result);
    });
};