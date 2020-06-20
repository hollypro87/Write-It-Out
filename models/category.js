module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        // Giving the category model a name of type STRING
        category: DataTypes.STRING,
        defaultValue: "Personal",
    });

    Category.associate = function (models) {
        // Associating Category with Posts
        // When a category is deleted, also delete any associated Posts
        Category.belongsToMany(models.Post, {
            onDelete: "cascade"
        });
    };

    return Category;
};