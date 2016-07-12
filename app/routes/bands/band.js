import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var bands = this.modelFor('bands');
    return bands.findBy('slug', params.slug); // params.slug is like 'pearl-jam'
  }
});
