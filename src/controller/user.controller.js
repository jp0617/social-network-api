module.exports = {
  signin: async (req, res) => {
    res.status(200).json(req.body);
  },
};
