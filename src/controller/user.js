const getUser = (req, res, next) => {
  const user = {
    name: 'no'
  }
  res.json(user);
}
module.exports = {
  getUser
}