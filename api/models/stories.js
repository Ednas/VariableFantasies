var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var storiesSchema = new Schema({
    title: {
        type: String,
        required: true
        },
    author: {
        type: String,
        required: true
        },
    story: {
        type: Object,
        required: true
        }
});


storiesSchema.methods.storieCount = function(cb){
    return this.model('Story').count({}, cb);
};


module.exports = storiesSchema;