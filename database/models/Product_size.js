module.exports = (sequelize, dataTypes) => {
    const alias = "Product_sizes",//// el alias es el nombre del modelo y se crea en singular y mayuscula
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
            quantity: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            products_id :{
                type : dataTypes.INTEGER,
                allowNull: false
            },
            sizes_id :{
                type : dataTypes.INTEGER,
                allowNull: false
            }
        }
        let config = {
            timestamps : true,
            underscored : true, // tiraba error entonces pusimos estas dos cosas en config
            tableName : "products_sizes"
                
        }

const Product_size = sequelize.define(alias,cols,config)




    return Product_size;
}