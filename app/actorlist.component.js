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
        // this function uses window.fetch to find star wars actors

        fetch('http://swapi.co/api/people/1/', {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
          })
          .then(this.processStatus)
          .then(this.parseJson)
          .then((js) => {
            // here you can send the js object to your own function
            // this.myFunction(js);
            console.log("we received data");
            console.log(js);
          })
          .catch((err) => {
            console.log("Error " + err);
          })
      },

      // we have to check if fetch returned a 200 or a 404
      processStatus : function (response) {
          if (response.status === 200 || response.status === 0) {
              return Promise.resolve(response)
          } else {
              return Promise.reject(new Error(response.statusText))
          }
      },

      // interpret the result as json
      parseJson : function (response) {
          return response.json();
      }

    });

})(window.app || (window.app = {}));