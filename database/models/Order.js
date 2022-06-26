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
                type: dataTypes.DATE,
                allowNull: false
                },
            paymentTypes_id:{
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
            users_id:{
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

    const Order = sequelize.define(alias, cols, config)

    Order.associate = function (models) {
        Order.belongsTo(models.User, { 
            as: "usuarios",
            foreignKey: "users_id"
        });
        Order.belongsTo(models.PaymentType, {
            as: "tiposDePago",
            foreignKey: "paymentTypes_id"
        });   
        Order.belongsToMany(models.Product, {
            as: "productos",
            through: "products_orders",
            foreignKey: "orders_id",
            otherKey: "products_id",
            timestamps: true
        });                 
        
    }
    return Order;
}