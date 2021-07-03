const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    _id : {type:Number,},
    name: { type: String, maxLength: 255, required: true },
    slug: { type: String, slug: 'name', unique: true },
    description: { type: String, maxLength: 600 },
    videoId: { type: String },
    level: { type: String, required: true },
    image: { type: String },
  },
  {
    _id :false,
    timestamps: true,
  }
);
//Add plugin
Course.plugin(AutoIncrement);
mongoose.plugin(slug);
Course.plugin(mongooseDelete,{ 
  deletedAt : true ,
  overrideMethods: 'all', });
module.exports = mongoose.model('Course', Course);
