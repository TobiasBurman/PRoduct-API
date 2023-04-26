const Country = require("../models/Country");

module.exports.fetchAllcountries = async (req, res) => {
  res.json(await Country.find());
};

module.exports.fetchSpecificCountry = async (req, res) => {
  try {
    res.send(await Country.findById(req.params.countryId));
  } catch (error) {
    res.send(error);
  }
};

module.exports.createCountry = async (req, res) => {
  try {
    const country = new Country({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      category: req.body.category,
      image: req.body.image,
    });
    res.send(await country.save());
  } catch (error) {
    res.send(error);
  }
};

module.exports.deleteCountry = async (req, res) => {
  try {
    res.send(await Country.deleteOne({ _id: req.params.countryId }));
  } catch (error) {
    res.send(error);
  }
};

module.exports.updateCountry = async (req, res) => {
  try {
    const updatedCountry = await Country.updateOne(
      { _id: req.params.countryId },
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

    res.json(updatedCountry);
  } catch (error) {
    res.json({ message: error });
  }
};
