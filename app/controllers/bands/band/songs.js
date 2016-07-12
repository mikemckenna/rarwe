import Ember from 'ember';

export default Ember.Controller.extend({
  songCreationStarted: false,

  canCreateSong: Ember.computed('songCreationStarted', 'model.songs.length', function() {
Ember.Logger.log('songCreationStarted: ', this.get('songCreationStarted'));
Ember.Logger.log('model.songs.length: ', this.get('model.songs.length'));
    return this.get('songCreationStarted') || this.get('model.songs.length');
  }),

  actions: {
    enableSongCreation() {
      this.set('songCreationStarted', true);
    },

    updateRating(params) {
      var song = params.item;
      var rating = params.rating;
      song.set('rating', rating);
    }
  }
});
