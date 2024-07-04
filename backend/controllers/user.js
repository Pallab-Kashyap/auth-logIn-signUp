// const { createUser,findUser } = require("../postgresDB");
const { createUser, findUser } = require("../mongoDB/DBOperations");

async function handleNewUser(req, res) {
  const data = req.body;
  const responce = await createUser(data.name, data.email, data.pass);

  if (responce) {
    res.send({ res: true });
  } else {
    res.send({ res: false });
  }
}

async function authUser(req, res) {
  const data = req.body;
  const responce = await findUser(data.email, data.pass);

  if (responce) {
    res.send({ res: true });
  } else {
    res.send({ res: false });
  }
}

module.exports = {
  handleNewUser,
  authUser,
};
