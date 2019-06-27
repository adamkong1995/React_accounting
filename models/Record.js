const Sequelize = require('sequelize');
const { DATEONLY, DOUBLE, INTEGER, STRING, Model } = Sequelize;


module.exports = sequelize => {
    class Record extends Model {};
    const Account = sequelize.models.account;
    Record.init({
        record_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        trade_type: { type: STRING },
        fund: { type: STRING },
        price: { type: DOUBLE },
        amount: { type: DOUBLE },
        currency: { type: STRING },
        ticker: { type: STRING },
        acct_from: { type: INTEGER },
        acct_to: { type: INTEGER },
        trade_date: { type: DATEONLY },
        settle_date: { type: DATEONLY },
        remark: { type: STRING },
        tx_fee: { type: DOUBLE },
        createdAt: { type: DATEONLY },
        updatedAt: { type: DATEONLY }
    }, {
        timestamps: true,
        sequelize,
        modelName: 'record'
    });
    Account.hasMany(Record, {foreignKey: 'acct_from', sourceKey: 'acct_id' });
    Record.belongsTo(Account, { foreignKey: 'acct_from', targetKey: 'acct_id' });

    Account.hasMany(Record, {foreignKey: 'acct_to', sourceKey: 'acct_id' });
    Record.belongsTo(Account, { foreignKey: 'acct_to', targetKey: 'acct_id' });
    Record.sync();
};