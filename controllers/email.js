Email.EmailController = Ember.ArrayController.extend({
  actions: {
    save: function() {
      var email = this.store.createRecord('email', {
        sender: this.get('sender'),
        subjectline: this.get('subjectline')
      });
      email.save();
    }
  }
});
