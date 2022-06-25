module.exports = (sequelize, dataTypes) => {
    const alias = "Image",//// el alias es el nombre del modelo y se crea en singular y mayuscula
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
            name: {
                type: dataTypes.STRING(45),
                allowNull: false
            },
            products_id: {
                type: dataTypes.INTEGER,
                allowNull: false,

            }
        }
        let config = {
            timestamps : true,
            underscored : true // tiraba error entonces pusimos estas dos cosas en config
                
        }

const Image = sequelize.define(alias,cols,config)

Image.associate = function(models){
    Image.belongsTo(models.Product,
        {
            as : "productos",
            foreignKey : "products_id"
        })
}

    return Image;
}