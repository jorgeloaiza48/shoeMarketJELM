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
            roles_id:{
                type: dataTypes.INTEGER,
                allowNull: false
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
            }
           
        }
    let config = {
        timestamps: true,
        underscored: true 
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = function (models) {
        User.belongsTo(models.Role, {
            as: "usuarios",
            foreignKey: "roles_id"
        });

        User.belongsTo(models.Order, {
            as: "ordenes",
            foreignKey: "user_id"
        });

        
        return User;
    }
}