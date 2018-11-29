const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');


const Quiz = function(url){
  this.url = url;
  this.request = new Request(this.url)
};







module.exports = Quiz;
