import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options){
    this.template = options.template;
  },
  render: function(){
    this.$el.html(this.template({name: this.model.get("name")}));
    console.log(this.model.toJSON());
    return this;
  }
});

export default ContactView;
