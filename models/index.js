// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./Product-tag");

Product.belongsTo(Category, { foreignKey: "category_id" });
Category.hasMany(Product, { foreignKey: "category_id" });

Product.belongsToMany(Tag, { through: ProductTag, foreignKey: "product_id" });
Product.hasMany(ProductTag);
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: "tag_id" });
Tag.hasMany(ProductTag);

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
