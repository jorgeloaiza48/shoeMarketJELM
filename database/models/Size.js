module.exports = (sequelize, dataTypes) => {
    const alias = "Size",//// el alias es el nombre del modelo y se crea en singular y mayuscula
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
            size: {
                type: dataTypes.DECIMAL(10,2),
                allowNull: false
            }
        }
        let config = {
            timestamps : true,
            underscored : true, // tiraba error entonces pusimos estas dos cosas en config
            tableName : "sizes"
                
        }

const Size = sequelize.define(alias,cols,config)

Size.associate = function(models){
    Size.belongsToMany(models.Product, {
        as: "productos",
        through: models.Product_size,
        foreignKey: "sizes_id",
        otherKey: "products_id",
        otherKey : "quantity",
        timestamps: true
    });
}

    return Size;
}