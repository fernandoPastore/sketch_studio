module.exports = (sequelize, DataTypes) => {
    let comentario = sequelize.define(
        'Comentarios',
        {id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        texto:{
            type:DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        tableName: 'comentarios',
        timestamps: true,
        paranoid: false
    }
)
comentario.associate = (model) => {
    comentario.belongsTo = (model.user,{foreignKey:"users_id", as:"users"});
}
 return comentario;
}