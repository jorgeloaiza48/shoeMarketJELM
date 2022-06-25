module.exports = (sequelize, dataTypes) => {
    const alias = "Order",
        cols = {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            create_time: {
                },
            paymentType_id:{
                type: dataTypes.INTEGER,
                allowNull: false            
            },
            total:{
                type: dataTypes.DECIMAL(10,2),
                allowNull: false                
            },
            status:{
                type: dataTypes.STRING(45),
                allowNull: false                                
            },
            user_id:{
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

    Order.associate = function (models) {
        Order.belongsTo(models.User, { 
            as: "orden",
            foreignKey: "user_id"
        });
        Order.belongsTo(models.PaymentType, {
            as: "tipoDePago",
            foreignKey: "paymentType_id"
        });   
        Order.belongsToMany(models.Product, {
            as: "productos",
            through: models.Product_order,
            foreignKey: "order_id",
            otherKey: "products_id",
            timestamps: true
        });                 
        
    }
    return Order;
}