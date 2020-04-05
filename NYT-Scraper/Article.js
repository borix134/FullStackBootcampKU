var mongoose = require("mongoose");
Schema = mongoose.Schema;

var articleSchema = new mongoose.Schema({ Headline: 'string', Summary: 'string', Url: 'string', Comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'}]}, {timestamps: true});

var Article = mongoose.model('article', articleSchema);

module.exports = Article;
