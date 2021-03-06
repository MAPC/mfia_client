/*global MfiaClient, Backbone*/

MfiaClient.Routers = MfiaClient.Routers || {};

(function () {
    'use strict';

    MfiaClient.Routers.Project = Backbone.Router.extend({
      routes: {
        '': 'home',
        'projects/': 'projects',
        'projects/:project_slug': 'project',
        'about': 'about',
        'contact': 'contact'
      },
      home: function() {
        var home = new MfiaClient.Views.Home();
        MfiaClient.app.getRegion('mainRegion').show(home);
      },
      projects: function(queryString) {
        var projects = new MfiaClient.Collections.Projects({'queryString': queryString});
        projects.fetch({'success': function(response) {
          var collectionView = new MfiaClient.Views.Projects({collection: projects});
          MfiaClient.app.getRegion('mainRegion').show(collectionView);
          console.log(response);
        }});
        
      },
      project: function() {

      },
      about: function() {
        var about = new MfiaClient.Views.About();
        MfiaClient.app.getRegion('mainRegion').show(about);
      },
      contact: function() {
        
      }
    });

    return MfiaClient.Routers.Project;
})();
