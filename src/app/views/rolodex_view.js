import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Rolodex from 'app/collections/rolodex';

const RolodexView = Backbone.View.extend({
  initialize: function(options){
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
    this.detailedTemplate = _.template($('#tmpl-contact-details').html());
    this.listOfContacts = [];
    this.listHolderElement = $('#contact-cards');
    for (var i = 0; i < this.model.length; i++){
      this.addContact(this.model.models[i]);
    }
    this.listenTo(this.model, "update", this.render);
    this.listenTo(this.model, "add", this.addContact);
  },
  render: function(){
    this.listHolderElement.empty();
    for (var i = 0; i < this.listOfContacts.length; i++){
      this.listHolderElement.append(this.listOfContacts[i].render().$el);
    }
    return this;
  },
  addContact: function(contact){
    var currentContact = new ContactView({model: contact, template: this.contactTemplate, detailed: this.detailedTemplate});
    this.listOfContacts.push(currentContact);
  },
  createNewContact: function(contact){
    this.model.add(contact);
  }
});

export default RolodexView;
