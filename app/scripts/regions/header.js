MfiaClient.Regions = MfiaClient.Regions || {};

(function () {

    MfiaClient.Regions.Header = Backbone.Marionette.Region.extend({

        el: 'nav', // better yet, pass in as parameter in options hash

        initialize: function (options) {
          console.log("Initialized Region");
        }

    });

    return MfiaClient.Regions.Header;

})();
// this.addRegions({
//   navRegion: '#header'
// });