var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    body: String,
    image: String,
    imageSpan: String,
    category: String,
    link: String,
    author: String,
    dia: String,
    mes: String,
    ano: String,
    views: Number,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Post', PostSchema);