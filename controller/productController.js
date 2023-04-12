const Product = require("../models/Product");

module.exports.fetchAllproducts = async (req, res) => {
  res.json(await Product.find());
};

module.exports.fetchSpecificProduct = async (req, res) => {
  try {
    res.send(await Product.findById(req.params.productId));
  } catch (error) {
    res.send(error);
  }
};

module.exports.createProduct = async (req, res) => {
  try {
    const product = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      category: req.body.category,
      image: req.body.image,
    });
    res.send(await product.save());
  } catch (error) {
    res.send(error);
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    res.send(await Product.deleteOne({ _id: req.params.productId }));
  } catch (error) {
    res.send(error);
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.productId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          stock: req.body.stock,
          category: req.body.category,
          image: req.body.image,
        },
      }
    );

    res.json(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};
