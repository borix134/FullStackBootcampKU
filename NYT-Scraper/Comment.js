var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({ text: 'string', username: ''}, {timestamps: true});

var Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;
