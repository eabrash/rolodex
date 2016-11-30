import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
import ContactView from 'app/views/contact_view';
import $ from 'jquery';
import _ from 'underscore';


var contactData = [{name: "Satine the Cat", phone: "425 785 9393", email: "satine@himalayan.com"}];

$(document).ready(function(){

  var contact = new Contact(contactData[0]);
  var contactTemplate = _.template($('#tmpl-contact-card').html());
  // this.detailedTemplate = _.template($('#tmpl-contact-details').html());

  var contactView = new ContactView({model: contact, template: contactTemplate});

  console.log(contactView.render().$el);

  $("#contact-cards").append(contactView.render().$el);

})
