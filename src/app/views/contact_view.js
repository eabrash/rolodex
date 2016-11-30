import Backbone from 'backbone';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options){
    this.template = options.template;
    this.detailedTemplate = options.detailed;
    // console.log(this.$el);
    // this.on('click', this.closeIfOutOfFocus, this.$el.parent);
  },
  render: function(){
    this.delegateEvents();
    this.$el.html(this.template({name: this.model.get("name")}));
    return this;
  },
  events: {
    'click .contact-card': 'displayDetails'
  },
  displayDetails: function(){
    $('#contact-details').removeClass('hidden');
    $('#contact-details').empty();
    $('#contact-details').append(this.detailedTemplate({name: this.model.get('name'), email: this.model.get('email'), phone: this.model.get('phone')}));
    this.render();
    console.log(this.model.toJSON());
    return this;
  }
  // closeIfOutOfFocus: function(event){
  //   console.log("WENT HERE");
  //   var modalAndContents = $('#contact-details');
  //
  //   if (!modalAndContents.is(e.target) && modalAndContents.has(e.target).length == 0)
  //   {
  //     modalAndContents.hide();
  //   }
  // }
});

export default ContactView;
