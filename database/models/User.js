module.exports = (sequelize, dataTypes) => {
    const alias = "User",
        cols = {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            document:{
                type: dataTypes.INTEGER,
                allowNull: false
            },
            first_name: {
                type: dataTypes.STRING(45),
                allowNull: false
            },
            last_name: {
                type: dataTypes.STRING(45),
                allowNull: false
            },
            email: {
                type: dataTypes.STRING(45),
                allowNull: false
            },
            password: {
                type: dataTypes.STRING(32),
                allowNull: false
            },
            create_time: {
                type: dataTypes.DATE,
                allowNull: false
            },
            date_of_birth: {
                type: dataTypes.DATE,
                allowNull: false
            },
            image: {
                type: dataTypes.STRING(45),
                allowNull: true,
                defaultValue: null
            },
            rol_id:{
                type: dataTypes.INTEGER,
                allowNull: false,
                foreignKey: true
            },
            updated_at: {
                field: "updated_at",
                type: dataTypes.DATE,
                allowNull: true,
                defaultValue: null
            },                                              
            created_at: {
                field: "created_at",
                type: dataTypes.DATE,
                allowNull: true,
                defaultValue: null
            },
            adress:{
                type: dataTypes.STRING(45),
                allowNull: false
            }
           
        }
    let config = {
        timestamps: true,
        underscored: true,
        tableName : "users"      
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = function (models) {
        User.belongsTo(models.Rol, {
            as: "Rol",
            foreignKey: "rol_id"
        });

        User.hasMany(models.Order, {
            as: "Order",
            foreignKey: "user_id"
        });               
    }
    return User;
}