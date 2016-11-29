import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Rolodex from 'app/collections/rolodex';

const RolodexView = Backbone.View.extend({
  initialize: function(options){
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
    this.listOfContacts = [];
    this.listHolderElement = $('#contact-cards');
    for (var i = 0; i < this.model.length; i++){
      this.addContact(this.model.models[i]);
    }
    this.formInput = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    }
    this.listenTo(this.model, "update", this.render);
    this.listenTo(this.model, "add", this.addContact);
  },
  events: {
    'click .btn-save': 'createNewContact',
    'click .btn-cancel': 'clearContactForm'
  },
  render: function(){
    this.listHolderElement.empty();
    for (var i = 0; i < this.listOfContacts.length; i++){
      this.listHolderElement.append(this.listOfContacts[i].render().$el);
    }
    return this;
  },
  addContact: function(contact){
    var currentContact = new ContactView({model: contact, template: this.contactTemplate});
    this.listOfContacts.push(currentContact);
  },
  createNewContact: function(){
    var contact = new Contact({name: this.formInput.name.val(), email: this.formInput.email.val(), phone: this.formInput.phone.val()});
    this.model.add(contact);
    this.clearContactForm();
  },
  clearContactForm: function(){
    this.formInput.name.val('');
    this.formInput.email.val('');
    this.formInput.phone.val('');
  }
});

export default RolodexView;
