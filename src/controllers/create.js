exports.get = (req, res) => {
  const { create } = req.params;
  console.log('params for create', req.params);
  return create.js;
};
