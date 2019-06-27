const Sequelize = require('sequelize');
const { DATEONLY, INTEGER, Model, STRING } = Sequelize;

module.exports= sequelize => {
    class Account extends Model {};

    Account.init({
        acct_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        acct_code: { type: STRING, allowNull: false },
        fullname: { type: STRING, allowNull: false },
        acct_no: { type: STRING, allowNull: false },
        createdAt: { type: DATEONLY },
        updatedAt: { type: DATEONLY }
    }, {
        timestamps: true,
        sequelize,
        modelName: 'account'
    });

    Account.sync();
};