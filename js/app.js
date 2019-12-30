

var app = angular.module('tutorialApp',["ngRoute","myControllerModule"]);



app.config(function ($routeProvider) {

    $routeProvider
        .when("/Salle/:name",{
            templateUrl: "views/salle.html",
            controller: "RoomController"
        })
        .when("/Salle/:name/:etage",{
            templateUrl: "views/etage.html",
            controller: "EtageController"
        })
        .when("/",{
            templateUrl: "views/salles.html",
            controller: "RoomsController"
        })
        .when("/inscription",{
            templateUrl: "views/inscription.html",
            controller: "InscriptionController"
        })
        .when("/connexion",{
            templateUrl: "views/connexion.html",
            controller: "ConnexionController"
        })
        .otherwise({

            redirectTo: "/"
        });

});


app.service("User", function(){

    let user = {};

    user.pseudo =  "anonymous";
    user.loggedin = false;



    return user;
});
/*
app.service("GroceryService", function($http){

    let groceryService = {};

    groceryService.groceryItems =  [];



    $http({
        method: 'GET',
        url: 'data/server_data.json'
    }).then(function (response){
        groceryService.groceryItems = response.data;

        for(let item in groceryService.groceryItems)
        {
            groceryService.groceryItems[item].date = new Date(groceryService.groceryItems[item].date);
        }
    },function (error){
        alert("une erreur est survenue");

    });

    groceryService.findById = function(id)
    {


        for(let item in groceryService.groceryItems)
        {
            if(groceryService.groceryItems[item].id === id)
                return groceryService.groceryItems[item];
        }


    };
    groceryService.getNewId = function(){

        if(groceryService.newId)
        {
            groceryService.newId++;
            return groceryService.newId;
        }
        else{

            let maxId = _.max(groceryService.groceryItems, function(entry){
                return entry.id;
            });

            groceryService.newId = maxId.id+1;
            return groceryService.newId;

        }


    };
    groceryService.save = function(entry)
    {

        let updatedItem = groceryService.findById(entry.id);

        if(updatedItem)
        {

            updatedItem.completed = entry.completed;
            updatedItem.itemName = entry.itemName;
            updatedItem.date = entry.date;

        }
        else {
            $http.post('data/added_item.json', entry)
                .then(function (response){

                    entry.id = response.newId;

                },function (error){
                    alert("une erreur est survenue : "+error);

                });


          //   entry.id = groceryService.getNewId();
            groceryService.groceryItems.push(entry);
        }

    };

    groceryService.removeItem = function(entry)
    {
        let index = groceryService.groceryItems.indexOf(entry);

        groceryService.groceryItems.splice(index,1);
    };

    groceryService.markCompleted = function(entry)
    {
        entry.completed = !entry.completed;

    };
    return groceryService;
});*/

/*
app.directive( "tbGroceryItem", function(){

    return{

        restrict: "E",
        templateUrl: "views/groceryItem.html"
    }
});*/