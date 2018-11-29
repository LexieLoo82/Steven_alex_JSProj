const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');


const FormView = function(form){
  this.form = form;
};



FormView.prototype.handleSumbmit = function (event) {
  event.preventDefault();
  const newQuiz = this.createQuiz(event.target);
  PubSub.publish('FormView:newQuizSubmitted', newQuiz)
};

FormView.prototype.createQuiz = function (form) {

};


module.exports = FormView;
