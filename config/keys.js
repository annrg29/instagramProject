// module.exports = {
//   MONGOURL:
//     "mongodb+srv://User:test123@cluster0.dho7rvy.mongodb.net/instagram1",
//   JWT_SECRET: "shobhitjain",
// };

if (process.env.NODE_ENV == "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
