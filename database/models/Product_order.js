module.exports = (sequelize, dataTypes) => {
    const alias = "Producto_order",//// el alias es el nombre del modelo y se crea en singular y mayuscula
        cols = {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            created_at: {
                field:"created_at",// tiraba error entonces le pusimos el campo field
                type: dataTypes.DATE,
                allowNull: true
            },
            updated_at: {
                field:"updated_at",
                type: dataTypes.DATE,
                allowNull: true,
            },
            product_id :{
                type : dataTypes.INTEGER,
                allowNull: false
            },
            order_id :{
                type : dataTypes.INTEGER,
                allowNull: false
            }
        }
        let config = {
            timestamps : true,
            underscored : true, // tiraba error entonces pusimos estas dos cosas en config
            tableName : "products_orders"
                
        }

const Product_order = sequelize.define(alias,cols,config)



    return Product_order;
}