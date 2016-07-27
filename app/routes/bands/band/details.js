import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('bands.band');
  },

  actions: {
    save() {
      const controller = this.get('controller');
      const band       = controller.get('model');
      return band.save();
    },

    willTransition(transition) {
      const controller = this.get('controller');
      let leave = false;
      
      if (controller.get('isEditing')) {
        leave = window.confirm("You have unsaved changes. Are you sure you want to leave ? ");
        if (leave) {
          controller.set('isEditing', false);
        } else {
          transition.abort();
        }
      }
    }
  }
});
