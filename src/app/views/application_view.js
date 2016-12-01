import Application from 'app/models/application';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
import $ from 'jquery';


const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.rolodex = new Rolodex(this.model.get('rolodex'));
    this.rolodexView = new RolodexView({model: this.rolodex, el: $('main')});
    // console.log(this.model);
    this.formInput = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    }
  },
  render: function() {
    this.rolodexView.render();
    return this;
  },
  events: {
    'click .btn-save': 'createNewContact',
    'click .btn-cancel': 'clearContactForm',
    'click': 'closeModal'
  },
  createNewContact: function(){
    var contact = new Contact({name: this.formInput.name.val(), email: this.formInput.email.val(), phone: this.formInput.phone.val()});
    this.rolodexView.createNewContact(contact);
    this.clearContactForm();
    // console.log(this.rolodex);
  },
  clearContactForm: function(){
    this.formInput.name.val('');
    this.formInput.email.val('');
    this.formInput.phone.val('');
  },
  closeModal: function(event){
    console.log("TRIGGERED");
    console.log(event);
    this.rolodexView.hideContactDetails();
  }
});

export default ApplicationView;
