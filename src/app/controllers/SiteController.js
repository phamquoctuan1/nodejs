const Course = require("../models/Course");
const { mutipleMongoosetoObject } = require("../../ulti/mongoose");

class SiteController {
  //[GET] /news
  index(req, res, next) {
    Course.find({})
    .then(courses => {
     
      res.render('home',{
        courses : mutipleMongoosetoObject(courses)
       })})
    .catch(next);
  }

  //[GET] /news/:slug
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
