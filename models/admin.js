module.exports = (sequelize, DataTypes ) => (
    sequelize.define('admin', {
        id:{
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true,
        },
        password:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },{
        timestamps: true,
        paranoid: true,
    })
);