exports.get = (req, res) => {
  const { thanks } = req.params;
  console.log('params for thanks', req.params);
  return thanks.js;
};
