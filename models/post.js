module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"

    },
  });

  category.associate = function (models) {
    // Associating Category with Posts
    // When a category is deleted, also delete any associated Posts
    category.belongsToMany(models.Post, {

    });
  };

  return Post;
};
