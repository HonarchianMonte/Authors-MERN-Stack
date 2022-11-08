const { Author } = require("../models/author.model");

// test api
module.exports.testApi = (req, res) => {
  res.json({ Status: "ok " });
};

// GET ALL
module.exports.allAuthors = (req, res) => {
  Author.find()
    .then((allAuthors) => res.json(allAuthors))
    .catch((err) => res.status(400).json(err));
};

// GET ONE
module.exports.oneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((oneAuthor) => res.json(oneAuthor))
    .catch((err) => res.status(400).json(err));
};

// CREATE
module.exports.addAuthor = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => res.json(newAuthor))
    .catch((err) => res.status(400).json(err));
};

// UPDATE
module.exports.updateAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => res.json(updatedAuthor))
    .catch((err) => res.status(400).json(err));
};

// DELETE
module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((status) => res.json(status))
    .catch((err) => res.status(400).json(err));
};
