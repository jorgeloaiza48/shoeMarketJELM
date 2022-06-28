module.exports = (sequelize, dataTypes) => {
    const alias = "Product",//// el alias es el nombre del modelo y se crea en singular y mayuscula
        cols = {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: dataTypes.STRING(150),
                allowNull: false
            },
            description: {
                type: dataTypes.STRING(400),
                allowNull: false
            },
            created_at: {
                field: "created_at",// tiraba error entonces le pusimos el campo field
                type: dataTypes.DATE,
                allowNull: true,
                defaultValue: null
            },
            updated_at: {
                field: "updated_at",
                type: dataTypes.DATE,
                allowNull: true,
                defaultValue: null
            },
            category_id: {
                type: dataTypes.INTEGER,
                allowNull: false,

            },
            create_time: {
                type: dataTypes.DATE,
                allowNull: false
            },
            price: {
                type: dataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            color: {
                type: dataTypes.STRING(45),
                allowNull: true
            },
            line_id: {
                type: dataTypes.INTEGER,
                allowNull: false,

            }
        }
    let config = {
        timestamps: true,
        underscored: true, // tiraba error entonces pusimos estas dos cosas en config
        tableName: "products"

    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            as: "categorias",
            foreignKey: "category_id"
        });

        Product.belongsTo(models.Line, {
            as: "lineas",
            foreignKey: "line_id"
        });

        Product.hasMany(models.Image, {
            as: "fotos",
            foreignKey: "product_id"
        });


        // Product.hasMany(models.Product_size,
        //     {
        //         as: "productosTalles",
        //         foreignKey: "product_id"
        //     })

            Product.belongsToMany(models.Size, {
                as: "talles",
                through: models.Product_size,
                foreignKey: "product_id",
                otherKey: "size_id",
                timestamps: true
            });

        Product.belongsToMany(models.Order, {
            as: "ordenes",
            through: "products_orders",
            foreignKey: "product_id",
            otherKey: "order_id",
            timestamps: true
        });




    }
    return Product;
}
