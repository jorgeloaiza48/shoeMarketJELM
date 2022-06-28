module.exports = (sequelize, dataTypes) => {
    const alias = "Payment_type",
        cols = {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            payment_type:{
                type: dataTypes.STRING(45),
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

    const Payment_type = sequelize.define(alias, cols, config)

    Payment_type.associate = function (models) {
        Payment_type.hasMany(models.Order, {
            as: "ordenes",
            foreignKey:"payment_type_id" 
            
        });
            
    }
    return Payment_type;
}