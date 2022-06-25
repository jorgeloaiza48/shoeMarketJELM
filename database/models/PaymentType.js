module.exports = (sequelize, dataTypes) => {
    const alias = "PaymentType",
        cols = {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            paymentType:{
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

    const PaymentType = sequelize.define(alias, cols, config)

    PaymentType.associate = function (models) {
        PaymentType.hasMany(models.Order, {
            as: "ordenes",
            foreignKey:"paymentType_id" 
            
        });
            
    }
    return PaymentType;
}