const { User, connectDB } = require("./mongoDB");

async function createUser(name, email, pass) {
  const result = await User.create({
    userName: name,
    email: email,
    password: pass,
  });

  return result;
}

async function findUser(email, pass) {
  await connectDB();

  const result = await User.find({ email: email });

  if (result[0].password === pass) {
    return true;
  }
  return false;
}

findUser("arav@g.c", "arav123");

module.exports = {
  createUser,
  findUser,
};
