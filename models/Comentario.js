module.exports = (sequelize, DataTypes) => {
    let Comentario = sequelize.define(
        'Comentario',
        {id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        texto:{
            type:DataTypes.TEXT,
            allowNull: false
        },
        users_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            references: {
              model:{
                tableName: "users"
              },
              key:"id"
            }
          }
    },
    {
        tableName: 'comentarios',
        timestamps: true,
        paranoid: false
    }
)
Comentario.associate = (model) => {
    Comentario.belongsTo(model.User,{foreignKey:"users_id", as:"comentador"});
}
 return Comentario;
}