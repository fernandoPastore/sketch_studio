module.exports = (sequelize, DataTypes) => {
    let user = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING(170),
                allowNull: false
            },
            telefone:{
                type: Sequelize.DataTypes.STRING(11),
                allowNull: false
            },
            foto: {
                type: DataTypes.STRING(200),
                allowNull: true
            }
        },
        {
            tableName: 'users',
            timestamps: true,
            paranoid: true
        }
    )

    user.associate = (models) =>{
        user.hasMany(
            models.Comentarios,
            {foreignKey:"users_id", as:"comentarios"}
        );
    }

    return user;
}