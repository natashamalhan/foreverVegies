const User = require("./User")
const Veggie = require("./Veggie")

User.hasMany(Veggie)
Veggie.belongsTo(User)

module.exports = {User,Veggie}