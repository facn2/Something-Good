exports.get = (req, res) => {
  const { home } = req.params;
  console.log(req.params);
  return home.js;
};
