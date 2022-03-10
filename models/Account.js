const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const accountSchema = new mongoose.Schema({
  accountType: { type: String, require: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
accountSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=accountType>" });
module.exports = mongoose.model("Account", accountSchema);
