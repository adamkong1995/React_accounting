const Sequelize = require('sequelize');
const { DATEONLY, INTEGER, Model, STRING } = Sequelize;

module.exports = sequelize => {
    class User extends Model {};

    User.init({
        uid: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: STRING },
        display_name: { type: STRING },
        dn: { type: STRING, allowNull: false },
        email: { type: STRING },
        member_of: { type: STRING },
        createdAt: { type: DATEONLY },
        updatedAt: { type: DATEONLY }
    }, {
        timestamps: true,
        sequelize,
        modelName: 'user'
    });
    User.sync();
};