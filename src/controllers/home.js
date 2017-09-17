exports.get = (req, res) => {
  const { home } = req.params;
  console.log('params for home', req.params);
  return home.js;
};
