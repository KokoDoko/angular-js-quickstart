(function(app) {

  app.Actorlist =
    ng.core.Component({
      selector: 'actor-list',
      templateUrl: './app/actorlist.component.html',
      styleUrls: ['./app/actorlist.component.css']
    })
    .Class({
      constructor: function() {
        // declare your variables here
        
        // this function is going to be called from a button in the html view
        this.searchActor();
      },

      searchActor: function(){
        fetch('http://swapi.co/api/people/1/')
          .then(res => res.json())
          .then(res => {
            // here you can place the result in the actor array
            console.log(res);
          })
      }

    });

})(window.app || (window.app = {}));
