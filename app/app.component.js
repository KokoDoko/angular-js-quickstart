(function(app) {

  app.AppComponent =
    ng.core.Component({
      selector: 'main-app',
      template: '<h2>{{ title }}</h2>',
    })
    .Class({
      constructor: function() {
        this.title = "Angular 2 Javascript";
      }
    });

})(window.app || (window.app = {}));